import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"

import { db } from "./firebase"
import { getCurrentUserId } from "./auth"
import type { User } from "./users"

export interface Question {
  id: string
  text: string
  userId?: User["id"]
  isPublic?: boolean
}

const questionsRef = collection(db, "questions")

export const addQuestion = ({ text }: { text: string }) => {
  const question = { text, userId: getCurrentUserId() }
  return addDoc(questionsRef, question).then((docRef) => ({ id: docRef.id, ...question }))
}

export const getQuestions = () =>
  getDocs(questionsRef).then(({ docs }) =>
    docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text as string,
      userId: doc.data().userId as string,
      isPublic: doc.data().isPublic as boolean,
    }))
  )

export const deleteQuestion = (id: Question["id"]) => deleteDoc(doc(db, "questions", id))
