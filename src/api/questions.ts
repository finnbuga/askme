import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"

import { db } from "./firebase"
import Question from "./interfaces/Question"

const questionsRef = collection(db, "questions")

export const addQuestion = (question: Omit<Question, "id">) =>
  addDoc(questionsRef, question).then((docRef) => ({ id: docRef.id, ...question }))

export const getQuestions = () =>
  getDocs(questionsRef).then(({ docs }) =>
    docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text as string,
      userId: doc.data().userId as string,
    }))
  )

export const deleteQuestion = (id: Question["id"]) => deleteDoc(doc(db, "questions", id))
