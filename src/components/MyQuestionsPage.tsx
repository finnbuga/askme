import React from "react"
import { RouteComponentProps } from "@reach/router"

import { deleteQuestion } from "api/questions"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const questions = useQuestions()

  return <QuestionsTable questions={questions} onDelete={deleteQuestion} />
}

export default MyQuestionsPage
