import { useState, useEffect } from "react"

import Question from "api/interfaces/Question"
import { getQuestions } from "api/questions"

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    getQuestions().then(setQuestions)
  }, [])

  return questions
}

export default useQuestions
