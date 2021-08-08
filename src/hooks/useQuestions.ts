import { useEffect, useState } from "react"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import { dispatchGetQuestions } from "store/questionsSlice"

const useQuestions = (filter?: (question: Question) => boolean) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null as string | null,
  })

  let questions = useSelector((state) => state.questions)
  if (filter) {
    questions = questions.filter(filter)
  }

  useEffect(() => {
    dispatchGetQuestions().then(({ payload }) => {
      // TODO use the error message in payload.error
      setState({ isLoading: false, error: payload ? null : "Failed fetching questions" })
    })
  }, [])

  return { questions, ...state }
}

export default useQuestions
