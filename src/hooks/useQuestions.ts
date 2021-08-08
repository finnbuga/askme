import { useEffect, useState } from "react"

import { useSelector } from "store"
import { dispatchGetQuestions } from "store/questionsSlice"

const useQuestions = () => {
  const [state, setState] = useState({
    isLoading: true,
    error: null as string | null,
  })

  const questions = useSelector((state) => state.questions)

  useEffect(() => {
    dispatchGetQuestions().then(({ payload }) => {
      // TODO use the error message in payload.error
      setState({ isLoading: false, error: payload ? null : "Failed fetching questions" })
    })
  }, [])

  const { isLoading, error } = state
  return { isLoading, error, questions }
}

export default useQuestions
