import "firebase/firestore"

import Question from "./interfaces/Question"
import firebase from "./firebase"

const questionsRef = firebase.firestore().collection("questions")

export const addQuestion = (question: Omit<Question, "id">) =>
  questionsRef.add(question).then((questionRef) => ({ id: questionRef.id, ...question }))

export const getQuestions = () =>
  questionsRef
    .get()
    .then(({ docs }) =>
      docs.map((doc) => ({ id: doc.id, text: doc.data().text, userId: doc.data().userId }))
    )

export const deleteQuestion = (id: Question["id"]) => questionsRef.doc(id).delete()
