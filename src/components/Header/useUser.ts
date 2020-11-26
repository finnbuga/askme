import { useState } from "react"

import User from "api/interfaces/User"
import { signInWithGoogle, signOut as apiSignOut } from "api/firebase"
import { getUser, addUser } from "api/users"

const useUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const signOut = () => apiSignOut().then(() => setCurrentUser(null))

  const signIn = () =>
    signInWithGoogle().then(({ user: authUser }) => {
      getUser(authUser!.uid).then((user) => {
        if (user) {
          setCurrentUser(user)
        } else {
          const newUser = { id: authUser!.uid, email: authUser!.email, name: authUser!.displayName }
          addUser(newUser).then(() => setCurrentUser(newUser))
        }
      })
    })

  return { user: currentUser, signIn, signOut }
}

export default useUser
