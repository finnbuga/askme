import { onAuthStateChanged } from "api/auth"
import { getUser, addUser } from "api/users"
import useDispatchActions from "store/useDispatchActions"
import { userActions } from "store/authSlice"

const useAuth = () => {
  const { setUser } = useDispatchActions(userActions)

  onAuthStateChanged(async (authUser) => {
    if (!authUser) {
      setUser(null)
    } else {
      const existingUser = await getUser(authUser!.uid)

      if (existingUser) {
        setUser(existingUser)
      } else {
        const newUser = { id: authUser!.uid, email: authUser!.email, name: authUser!.displayName }
        await addUser(newUser)
        setUser(newUser)
      }
    }
  })
}

export default useAuth
