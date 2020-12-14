import { useSelector } from "store"
import Question from "api/interfaces/Question"
import { addLikedQuestion, removeLikedQuestion } from "store/userSlice"

const useLike = (id: Question["id"]) => {
  const likedQuestions = useSelector((state) => state.user?.likedQuestions)
  const isLiked = likedQuestions?.includes(id)

  const like = () => (isLiked ? removeLikedQuestion(id) : addLikedQuestion(id))

  return { isLiked, like }
}

export default useLike
