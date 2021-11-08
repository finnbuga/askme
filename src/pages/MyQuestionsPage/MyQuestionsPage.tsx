import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert, List, ListItem } from "@mui/material"
import { useAsync } from "react-use"

import { useSelector, useDispatch } from "store"
import { getQuestions } from "store/questionsSlice"
import DeleteButton from "pages/MyQuestionsPage/DeleteButton"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const questions = useSelector((state) => state.questions)
  const dispatch = useDispatch()

  const { loading, error } = useAsync(() => dispatch(getQuestions()))

  const myQuestions = questions.filter((question) => question.userId === user?.id)

  return (
    <>
      <h2>My Questions</h2>

      {isAuthenticating || loading ? null : !user ? (
        <Alert severity="info">In order to add your own questions please login</Alert>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <List>
            {myQuestions.map(({ id, text }) => (
              <ListItem key={id} secondaryAction={<DeleteButton id={id} />} divider sx={{ py: 3 }}>
                {text}
              </ListItem>
            ))}
          </List>

          <AddQuestion />
        </>
      )}
    </>
  )
}

export default MyQuestionsPage
