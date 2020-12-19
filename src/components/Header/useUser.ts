import { useSelector } from "store"
import { setUser } from "store/userSlice"
import { signInWithGoogle, signOut as apiSignOut } from "api/authentication"
import { getUser, addUser } from "api/users"

const useUser = () => {
  const currentUser = useSelector((state) => state.user)

  const signOut = () => apiSignOut().then(() => setUser(null))

  const signIn = async () => {
    const { user: authUser } = await signInWithGoogle()

    const existingUser = await getUser(authUser!.uid)

    if (existingUser) {
      setUser(existingUser)
    } else {
      const newUser = { id: authUser!.uid, email: authUser!.email, name: authUser!.displayName }
      await addUser(newUser)
      setUser(newUser)
    }
  }

  return { user: currentUser, signIn, signOut }
}

export default useUser
