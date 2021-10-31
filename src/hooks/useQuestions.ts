import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "store"
import { questionsActions } from "store/questionsSlice"

import type { Question } from "api/questions"

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
