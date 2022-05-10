import { Alert, List, ListItem, Fade } from "@mui/material"

import type { Question } from "api/questions"
import { useSelector } from "store"
import { useQuestions } from "hooks/useQuestions"
import DeleteButton from "pages/MyQuestionsPage/DeleteButton"
import AddQuestion from "pages/MyQuestionsPage/AddQuestion"

const MyQuestionsPage: React.FC = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => !!user && question.userId === user.id
  const { questions, isLoading, error } = useQuestions({ filter: isMyQuestion })

  return (
    <>
      <h1>My Questions</h1>

      {isAuthenticating || isLoading ? null : !user ? (
        <Alert severity="info">In order to add your own questions please login</Alert>
      ) : error ? (
        <Alert severity="error">{error.message}</Alert>
      ) : (
        <>
          <List>
            {questions.map(({ id, text }) => (
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
