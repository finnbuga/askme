import { useState, useEffect } from "react"
import firebase from "firebase/app"

import { signInWithGoogle, auth, usersRef } from "../../firebase"

interface User {
  id?: string
  email?: string | null
  name?: string | null
}

const userConverter = (id: string) => ({
  toFirestore: (user: User): firebase.firestore.DocumentData => user,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): User => ({ id, ...snapshot.data(options) }),
})

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const signOut = () => auth.signOut().then(() => setUser(null))
  const signIn = signInWithGoogle

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return
      }

      usersRef
        .doc(user.uid)
        .withConverter(userConverter(user.uid))
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data()!)
          } else {
            const newUser = { email: user.email, name: user.displayName }
            usersRef
              .doc(user.uid)
              .set(newUser)
              .then(() => setUser({ id: user.uid, ...newUser }))
          }
        })
    })
  }, [])

  return { user, signIn, signOut }
}

export default useUser
