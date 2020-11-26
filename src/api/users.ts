import "firebase/firestore"

import User from "./interfaces/User"
import firebase from "./firebase"

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

export const usersRef = firebase.firestore().collection("users")

export const addUser = (user: User) => usersRef.doc(user.id).set(user)

export const getUser = (id: User["id"]) =>
  usersRef
    .doc(id)
    .withConverter(userConverter(id))
    .get()
    .then((doc) => doc.data())
