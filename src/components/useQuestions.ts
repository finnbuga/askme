import { useEffect } from "react"

import { useSelector, dispatch } from "store"
import { getQuestions } from "store/questionsSlice"

const useQuestions = () => {
  const questions = useSelector((state) => state.questions)

  useEffect(() => {
    dispatch(getQuestions())
  }, [])

  return questions
}

export default useQuestions
