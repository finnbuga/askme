import "firebase/firestore"

import Question from "./interfaces/Question"
import firebase from "./firebase"

const questionsRef = firebase.firestore().collection("questions")

export const getQuestions = async () => {
  try {
    const querySnapshot = await questionsRef.get()
    const fetchedQuestions: Question[] = []
    querySnapshot.forEach((doc) => {
      fetchedQuestions.push({ id: doc.id, text: doc.data().text })
    })
    return fetchedQuestions
  } catch (error) {
    return Promise.reject(error)
  }
}

export const deleteQuestion = async (id: Question["id"]) => {
  questionsRef.doc(id).delete()
}
