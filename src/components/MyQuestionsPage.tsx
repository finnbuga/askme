import React from "react"
import { RouteComponentProps } from "@reach/router"

import { addQuestion } from "api/questions"
import { deleteQuestion } from "store/questionsSlice"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"
import AddQuestion from "components/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <QuestionsTable questions={questions!} onDelete={deleteQuestion} />
      <AddQuestion onAdd={addQuestion} />
    </>
  )
}

export default MyQuestionsPage
