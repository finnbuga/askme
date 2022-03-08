import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert, List, ListItem, Fade } from "@mui/material"
import { useAsync } from "react-use"

import { useSelector, useDispatch } from "store"
import { getQuestions } from "store/questionsSlice"
import DeleteButton from "pages/MyQuestionsPage/DeleteButton"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const questions = useSelector((state) => state.questions)
  const myQuestions = questions.filter(({ userId }) => userId === user?.id)

  const dispatch = useDispatch()
  const { loading, error } = useAsync(() => dispatch(getQuestions()))

  return (
    <>
      <h1>My Questions</h1>

      {isAuthenticating || loading ? null : !user ? (
        <Alert severity="info">In order to add your own questions please login</Alert>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <List>
            {myQuestions.map(({ id, text }) => (
              <Fade in key={id} timeout={300}>
                <ListItem secondaryAction={<DeleteButton id={id} />} divider sx={{ py: 3, px: 0 }}>
                  {text}
                </ListItem>
              </Fade>
            ))}
          </List>

          <AddQuestion />
        </>
      )}
    </>
  )
}

export default MyQuestionsPage
