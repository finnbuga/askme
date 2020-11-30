import "firebase/firestore"

import Question from "./interfaces/Question"
import firebase from "./firebase"

const questionsRef = firebase.firestore().collection("questions")

export const getQuestions = () =>
  questionsRef.get().then(({ docs }) => docs.map((doc) => ({ id: doc.id, text: doc.data().text })))

export const deleteQuestion = (id: Question["id"]) => questionsRef.doc(id).delete()
