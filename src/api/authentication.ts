import "firebase/auth"

import firebase from "./firebase"

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = firebase.auth().signInWithPopup.bind(firebase.auth(), provider)

export const signOut = firebase.auth().signOut.bind(firebase.auth())
