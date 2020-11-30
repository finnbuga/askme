import React from "react"
import { RouteComponentProps } from "@reach/router"

import useQuestions from "./useQuestions"
import QuestionsSlider from "components/QuestionsSlider"

const AllQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <QuestionsSlider questions={questions!} />
}

export default AllQuestionsPage
