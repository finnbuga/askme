import { onAuthStateChanged } from "api/auth"
import { getUser, addUser } from "api/users"
import { useDispatch } from "store"
import { setUser } from "store/userSlice"

const useAuth = () => {
  const dispatch = useDispatch()

  onAuthStateChanged(async (authUser) => {
    if (!authUser) {
      dispatch(setUser(null))
    } else {
      const existingUser = await getUser()
      if (existingUser) {
        dispatch(setUser(existingUser))
      } else {
        const { uid: id, email, displayName: name } = authUser
        const newUser = { id, email, name, likedQuestions: [] }
        await addUser(newUser)
        dispatch(setUser(newUser))
      }
    }
  })
}

export default useAuth
