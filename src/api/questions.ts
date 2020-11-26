import "firebase/firestore"

import Question from "./interfaces/Question"
import firebase from "./firebase"

const questionsRef = firebase.firestore().collection("questions")

export const getQuestions = async () => {
  const querySnapshot = await questionsRef.get()
  const fetchedQuestions: Question[] = []
  querySnapshot.forEach((doc) => {
    fetchedQuestions.push({ id: doc.id, text: doc.data().text })
  })
  return fetchedQuestions
}
