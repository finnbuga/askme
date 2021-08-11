import "firebase/firestore"

import firebase from "./firebase"
import User from "./interfaces/User"

const userConverter = (id: string) => ({
  toFirestore: (user: User): firebase.firestore.DocumentData => user,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): User => {
    const data = snapshot.data(options)
    return { id, email: data.email, name: data.name, likedQuestions: data.likedQuestions }
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

export const addLikedQuestion = (userId: string, questionId: string) =>
  usersRef
    .doc(userId)
    .update({ likedQuestions: firebase.firestore.FieldValue.arrayUnion(questionId) })

export const removeLikedQuestion = (userId: string, questionId: string) =>
  usersRef
    .doc(userId)
    .update({ likedQuestions: firebase.firestore.FieldValue.arrayRemove(questionId) })
