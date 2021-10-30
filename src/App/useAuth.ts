import { onAuthStateChanged } from "api/auth"
import { getUser, addUser } from "api/users"
import useDispatchActions from "store/useDispatchActions"
import { userActions } from "store/userSlice"

const useAuth = () => {
  const { setUser } = useDispatchActions(userActions)

  onAuthStateChanged(async (authUser) => {
    if (!authUser) {
      setUser(null)
    } else {
      const existingUser = await getUser()
      if (existingUser) {
        setUser(existingUser)
      } else {
        const { uid: id, email, displayName: name } = authUser
        const newUser = { id, email, name, likedQuestions: [] }
        await addUser(newUser)
        setUser(newUser)
      }
    }
  })
}

export default useAuth
