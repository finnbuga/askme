import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert } from "@material-ui/core"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import useQuestions from "hooks/useQuestions"
import QuestionsTable from "pages/MyQuestionsPage/QuestionsTable"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { user, isLoading: isUserLoading } = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => question.userId === user?.id
  const { questions, isLoading, error } = useQuestions(isMyQuestion)

  if (isUserLoading) {
    return null
  }
  if (!user) {
    return <Alert severity="info">In order to add your own questions please login</Alert>
  }
  if (!isLoading && error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      <QuestionsTable questions={questions} isLoading={isLoading} />
      {user && <AddQuestion />}
    </>
  )
}

export default MyQuestionsPage
