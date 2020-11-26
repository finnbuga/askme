import React from "react"
import { RouteComponentProps } from "@reach/router"

import useQuestions from "./useQuestions"
import QuestionsSlider from "components/QuestionsSlider"

const AllQuestionsPage: React.FC<RouteComponentProps> = () => {
  const questions = useQuestions()

  return <QuestionsSlider questions={questions} />
}

export default AllQuestionsPage
