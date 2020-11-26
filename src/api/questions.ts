import "firebase/firestore"

import firebase from "./firebase"

export const questionsRef = firebase.firestore().collection("questions")
