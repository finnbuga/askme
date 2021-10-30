import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { arrayUnion, arrayRemove } from "firebase/firestore"

import { db, auth } from "./firebase"
import User from "./interfaces/User"

const getUserRef = (id: string = auth.currentUser!.uid) => doc(db, "users", id)

export const addUser = (user: User) => setDoc(getUserRef(), user)

export const getUser = () => getDoc(getUserRef()).then((doc) => doc.data())

export const addLikedQuestion = (questionId: string) =>
  updateDoc(getUserRef(), { likedQuestions: arrayUnion(questionId) })

export const removeLikedQuestion = (questionId: string) =>
  updateDoc(getUserRef(), { likedQuestions: arrayRemove(questionId) })
