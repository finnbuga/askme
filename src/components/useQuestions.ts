import { useEffect, useState } from "react"

import { useSelector } from "store"
import { getQuestions } from "store/questionsSlice"

const useQuestions = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const questions = useSelector((state) => state.questions)

  useEffect(() => {
    setIsLoading(true)
    getQuestions().then(({ payload }) => {
      // @todo use the error message in payload.error
      setError(payload ? null : "Failed fetching questions")
      setIsLoading(false)
    })
  }, [])

  return { isLoading, error, questions }
}

export default useQuestions
