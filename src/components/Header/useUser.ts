import { useState } from "react"

import User from "api/interfaces/User"
import { signInWithGoogle, signOut as apiSignOut } from "api/firebase"
import { getUser, addUser } from "api/users"

const useUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const signOut = () => apiSignOut().then(() => setCurrentUser(null))

  const signIn = async () => {
    const { user: authUser } = await signInWithGoogle()

    const existingUser = await getUser(authUser!.uid)

    if (existingUser) {
      setCurrentUser(existingUser)
    } else {
      const newUser = { id: authUser!.uid, email: authUser!.email, name: authUser!.displayName }
      await addUser(newUser)
      setCurrentUser(newUser)
    }
  }

  return { user: currentUser, signIn, signOut }
}

export default useUser
