import { useQuery } from "@tanstack/react-query"

import type { Question } from "api/questions"
import { getQuestions } from "api/questions"

export type FilterFn = (question: Question) => boolean

export const useQuestions = ({ filter }: { filter?: FilterFn }) => {
  const { data, isLoading, error } = useQuery({ queryKey: ["questions"], queryFn: getQuestions })
  let questions = data ?? []
  if (filter) {
    questions = questions.filter(filter)
  }
  questions.sort((a, b) => a.timestamp - b.timestamp)

  return { questions, isLoading, error: error as Error }
}
