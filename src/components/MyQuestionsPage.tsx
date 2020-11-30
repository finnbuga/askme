import React from "react"
import { RouteComponentProps } from "@reach/router"

import { deleteQuestion } from "store/questionsSlice"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <QuestionsTable questions={questions!} onDelete={deleteQuestion} />
  )
}

export default MyQuestionsPage
