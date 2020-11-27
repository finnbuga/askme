import { useSelector, dispatch } from "store"
import { setUser } from "store/userSlice"
import { signInWithGoogle, signOut as apiSignOut } from "api/authentication"
import { getUser, addUser } from "api/users"

const useUser = () => {
  const currentUser = useSelector((state) => state.user)

  const signOut = () => apiSignOut().then(() => dispatch(setUser(null)))

  const signIn = async () => {
    const { user: authUser } = await signInWithGoogle()

    const existingUser = await getUser(authUser!.uid)

    if (existingUser) {
      dispatch(setUser(existingUser))
    } else {
      const newUser = { id: authUser!.uid, email: authUser!.email, name: authUser!.displayName }
      await addUser(newUser)
      dispatch(setUser(newUser))
    }
  }

  return { user: currentUser, signIn, signOut }
}

export default useUser
