import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert, List, ListItem } from "@material-ui/core"

import Question from "api/interfaces/Question"
import { useSelector } from "store"
import useQuestions from "hooks/useQuestions"
import DeleteButton from "pages/MyQuestionsPage/DeleteButton"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => question.userId === user?.id
  const { questions, isLoading, error } = useQuestions(isMyQuestion)

  return (
    <>
      <h2>My Questions</h2>

      {isAuthenticating || isLoading ? null : !user ? (
        <Alert severity="info">In order to add your own questions please login</Alert>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <List>
            {questions.map(({ id, text }) => (
              <ListItem key={id} divider sx={{ py: 3 }} secondaryAction={<DeleteButton id={id} />}>
                {text}
              </ListItem>
            ))}
          </List>

          {user && <AddQuestion />}
        </>
      )}
    </>
  )
}

export default MyQuestionsPage
