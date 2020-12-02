import React from "react"
import { RouteComponentProps } from "@reach/router"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import { addQuestion, deleteQuestion } from "store/questionsSlice"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"
import AddQuestion from "components/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()
  const user = useSelector((state) => state.user)

  const handleAddQuestion = (question: Omit<Question, "id" | "userId">) =>
    addQuestion({ userId: user!.id, ...question })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <QuestionsTable questions={questions!} onDelete={deleteQuestion} />
      <AddQuestion onAdd={handleAddQuestion} />
    </>
  )
}

export default MyQuestionsPage
