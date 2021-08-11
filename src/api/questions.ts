import "firebase/firestore"

import firebase from "./firebase"
import Question from "./interfaces/Question"

const questionsRef = firebase.firestore().collection("questions")

export const addQuestion = (question: Omit<Question, "id">) =>
  questionsRef.add(question).then((questionRef) => ({ id: questionRef.id, ...question }))

export const getQuestions = () =>
  questionsRef.get().then(({ docs }) =>
    docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text as string,
      userId: doc.data().userId as string,
    }))
  )

export const deleteQuestion = (id: Question["id"]) => questionsRef.doc(id).delete()
