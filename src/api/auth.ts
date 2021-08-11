import "firebase/auth"

import firebase from "./firebase"

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider)

export const signOut = () => firebase.auth().signOut()

export const onAuthStateChanged = firebase.auth().onAuthStateChanged.bind(firebase.auth())
