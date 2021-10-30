import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
} from "firebase/auth"

const auth = getAuth()
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const signOut = () => firebaseSignOut(auth)

export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth)
