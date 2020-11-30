import { useEffect } from "react"

import { useSelector } from "store"
import { getQuestions } from "store/questionsSlice"

const useQuestions = () => {
  const questions = useSelector((state) => state.questions)

  useEffect(() => {
    getQuestions()
  }, [])

  return questions
}

export default useQuestions
