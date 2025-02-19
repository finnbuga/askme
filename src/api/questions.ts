import { addDoc, collection, deleteDoc, doc,getDocs } from "firebase/firestore"

import { getCurrentUserId } from "./auth"
import { db } from "./firebase"
import type { User } from "./users"

export interface Question {
  id: string
  text: string
  userId?: User["id"]
  isPublic?: boolean
  timestamp: number
}

const questionsRef = collection(db, "questions")

export const addQuestion = ({ text }: { text: string }) => {
  const question = {
    text,
    userId: getCurrentUserId(),
    timestamp: Date.now(),
  }
  return addDoc(questionsRef, question).then((docRef) => ({ id: docRef.id, ...question }))
}

export const getQuestions = () =>
  getDocs(questionsRef).then(({ docs }) =>
    docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text as string,
      userId: doc.data().userId as string,
      isPublic: doc.data().isPublic as boolean,
      timestamp: doc.data().timestamp as number,
    }))
  )

export const deleteQuestion = (id: Question["id"]) => deleteDoc(doc(db, "questions", id))
