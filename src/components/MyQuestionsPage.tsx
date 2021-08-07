import React from "react"
import { RouteComponentProps } from "@reach/router"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import { dispatchAddQuestion, dispatchDeleteQuestion } from "store/questionsSlice"
import useQuestions from "./useQuestions"
import QuestionsTable from "components/QuestionsTable"
import AddQuestion from "components/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const user = useSelector((state) => state.user)
  const { questions, isLoading, error } = useQuestions()
  const myQuestions = questions?.filter((question) => question.userId === user?.id)

  const handleAddQuestion = (question: Omit<Question, "id" | "userId">) =>
    dispatchAddQuestion({ userId: user!.id, ...question })

  if (!isLoading && error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <QuestionsTable
        questions={myQuestions!}
        isLoading={isLoading}
        onDelete={dispatchDeleteQuestion}
      />

      {user && <AddQuestion onAdd={handleAddQuestion} />}
    </>
  )
}

export default MyQuestionsPage
