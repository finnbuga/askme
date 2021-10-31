import { signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "./firebase"

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())

export const signOut = () => firebaseSignOut(auth)

export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth)

export const getCurrentUserId = () => auth.currentUser?.uid
