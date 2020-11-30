import React from "react"
import { RouteComponentProps } from "@reach/router"

import useQuestions from "./useQuestions"
import QuestionsSlider from "components/QuestionsSlider"

const AllQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <QuestionsSlider questions={questions!} />
  )
}

export default AllQuestionsPage
