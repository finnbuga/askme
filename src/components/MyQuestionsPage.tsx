import React from "react"
import { RouteComponentProps } from "@reach/router"

import { deleteQuestion } from "store/questionsSlice"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <QuestionsTable questions={questions!} onDelete={deleteQuestion} />
}

export default MyQuestionsPage
