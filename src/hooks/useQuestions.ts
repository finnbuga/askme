import { useEffect, useState } from "react"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import { questionsActions } from "store/questionsSlice"
import useDispatchActions from "store/useDispatchActions"

const useQuestions = (filter?: (question: Question) => boolean) => {
  const { getQuestions } = useDispatchActions(questionsActions)
  const [state, setState] = useState({
    isLoading: true,
    error: null as string | null,
  })

  let questions = useSelector((state) => state.questions)
  if (filter) {
    questions = questions.filter(filter)
  }

  useEffect(() => {
    getQuestions().then(({ payload }) => {
      // TODO use the error message in payload.error
      setState({ isLoading: false, error: payload ? null : "Failed fetching questions" })
    })
  }, [getQuestions])

  return { questions, ...state }
}

export default useQuestions
