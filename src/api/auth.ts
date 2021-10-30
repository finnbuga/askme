import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth"

export const auth = getAuth()

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())

export const signOut = () => firebaseSignOut(auth)

export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth)
