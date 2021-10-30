import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"
import { arrayUnion, arrayRemove } from "firebase/firestore"

import { db } from "./firebase"
import User from "./interfaces/User"

const usersRef = collection(db, "users")

export const addUser = (user: User) => addDoc(usersRef, user)

export const getUser = (id: User["id"]) => {
  const userRef = doc(db, "users", id).withConverter({
    toFirestore: (user: User) => user,
    fromFirestore: (snapshot, options): User => {
      const user = snapshot.data(options) as Omit<User, "id">
      return { id, ...user }
    },
  })
  return getDoc(userRef).then((doc) => doc.data())
}

export const addLikedQuestion = (userId: string, questionId: string) =>
  updateDoc(doc(db, "users", userId), { likedQuestions: arrayUnion(questionId) })

export const removeLikedQuestion = (userId: string, questionId: string) =>
  updateDoc(doc(db, "users", userId), { likedQuestions: arrayRemove(questionId) })
