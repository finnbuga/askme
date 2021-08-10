import { useEffect, useState } from "react"

import Question from "api/interfaces/Question"
import { useDispatch, useSelector } from "store"
import { questionsActions } from "store/questionsSlice"

const useQuestions = (filter?: (question: Question) => boolean) => {
  let questions = useSelector((state) => state.questions)
  if (filter) {
    questions = questions.filter(filter)
  }

  const [state, setState] = useState({
    isLoading: true,
    error: null as string | null,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    const { getQuestions } = questionsActions
    dispatch(getQuestions()).then(({ payload }) => {
      // TODO use the error message in payload.error
      setState({ isLoading: false, error: payload ? null : "Failed fetching questions" })
    })
  }, [dispatch])

  return { questions, ...state }
}

export default useQuestions
