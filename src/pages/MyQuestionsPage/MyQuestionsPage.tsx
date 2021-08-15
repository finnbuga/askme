import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert } from "@material-ui/core"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import useQuestions from "hooks/useQuestions"
import QuestionsTable from "pages/MyQuestionsPage/QuestionsTable"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.auth)
  const isMyQuestion = (question: Question) => question.userId === user?.id
  const { questions, isLoading, error } = useQuestions(isMyQuestion)

  return (
    <>
      <h2>My Questions</h2>

      {isAuthenticating || isLoading ? null : !user ? (
        <Alert severity="info">In order to add your own questions please login</Alert>
      ) : !isLoading && error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <QuestionsTable questions={questions} />
          {user && <AddQuestion />}
        </>
      )}
    </>
  )
}

export default MyQuestionsPage
