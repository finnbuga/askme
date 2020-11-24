import { useState, useEffect } from "react"
import firebase from "firebase/app"

import { signInWithGoogle, auth, usersRef } from "../firebase"

class User {
  constructor(public email?: string | null, public name?: string | null, public id?: string) {}
}

const userConverter = {
  toFirestore: (user: User): firebase.firestore.DocumentData => user,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): User => {
    const data = snapshot.data(options)
    return new User(data.email, data.name)
  },
}

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
        .withConverter(userConverter)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data()!)
          } else {
            usersRef
              .doc(user.uid)
              .set({ email: user.email, name: user.displayName })
              .then(() => setUser(new User(user.email, user.displayName)))
          }
        })
    })
  }, [])

  return { user, signIn, signOut }
}

export default useUser
