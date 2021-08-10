import { onAuthStateChanged } from "api/authentication"
import { getUser, addUser } from "api/users"
import useDispatchActions from "store/useDispatchActions"
import { userActions } from "store/userSlice"

const useAuthentication = () => {
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

export default useAuthentication
