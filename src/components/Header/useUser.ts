import { useState } from "react"
import firebase from "firebase/app"

import User from "interfaces/User"
import { signInWithGoogle, auth, usersRef } from "../../firebase"

const userConverter = (id: string) => ({
  toFirestore: (user: User): firebase.firestore.DocumentData => user,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): User => {
    const data = snapshot.data(options)
    return { id, email: data.email, name: data.name }
  },
})

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  const signOut = () => auth.signOut().then(() => setUser(null))

  const signIn = () =>
    signInWithGoogle().then(({ user: authUser }) => {
      const { uid: id, email, displayName: name } = authUser!

      usersRef
        .doc(id)
        .withConverter(userConverter(id))
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data()!)
          } else {
            usersRef
              .doc(id)
              .set({ email, name })
              .then(() => setUser({ id, email, name }))
          }
        })
    })

  return { user, signIn, signOut }
}

export default useUser
