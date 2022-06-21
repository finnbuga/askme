import { useQuery } from "react-query"

import { getQuestions } from "api/questions"
import type { Question } from "api/questions"

export type Filter = (question: Question) => boolean

export const useQuestions = ({ filter }: { filter?: Filter }) => {
  const { data, isLoading, error } = useQuery("questions", getQuestions)
  let questions = data ?? []
  if (filter) {
    questions = questions.filter(filter)
  }
  questions.sort((a, b) => a.timestamp - b.timestamp)

  return { questions, isLoading, error: error as Error }
}
