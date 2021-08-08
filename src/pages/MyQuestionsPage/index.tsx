import React from "react"
import { RouteComponentProps } from "@reach/router"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import useQuestionsActions from "store/useQuestionsActions"
import useQuestions from "hooks/useQuestions"
import QuestionsTable from "pages/MyQuestionsPage/QuestionsTable"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const user = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => question.userId === user?.id
  const { questions, isLoading, error } = useQuestions(isMyQuestion)
  const { addQuestion, deleteQuestion } = useQuestionsActions()

  const handleAddQuestion = (question: Omit<Question, "id" | "userId">) =>
    addQuestion({ userId: user!.id, ...question })

  if (!user) {
    return <p>In order to add your own questions please login</p>
  }

  if (!isLoading && error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <QuestionsTable questions={questions} isLoading={isLoading} onDelete={deleteQuestion} />

      {user && <AddQuestion onAdd={handleAddQuestion} />}
    </>
  )
}

export default MyQuestionsPage
