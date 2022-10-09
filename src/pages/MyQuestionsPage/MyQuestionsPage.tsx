import { Alert, Box } from "@mui/material"

import type { Question } from "api/questions"
import { useSelector } from "store"
import { useQuestions } from "hooks/useQuestions"

import AddQuestion from "./AddQuestion"
import QuestionsList from "./QuestionsList"

const MyQuestionsPage: React.FC = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => !!user && question.userId === user.id
  const { questions, isLoading, error } = useQuestions({ filter: isMyQuestion })

  return (
    <>
      <h1>My Questions</h1>

      <Box sx={{ mt: 10 }}>
        {isAuthenticating || isLoading ? null : !user ? (
          <Alert severity="info">In order to add your own questions please login</Alert>
        ) : error ? (
          <Alert severity="error">{error.message}</Alert>
        ) : (
          <>
            <QuestionsList questions={questions} />
            <AddQuestion />
          </>
        )}
      </Box>
    </>
  )
}

export default MyQuestionsPage
