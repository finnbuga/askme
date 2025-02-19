import { Alert } from "@mui/material"

import type { Question } from "api/questions"
import { H1 } from "components/ui/H1"
import { useQuestions } from "hooks/useQuestions"
import { useSelector } from "store"

import { AddQuestion } from "./AddQuestion"
import { QuestionsList } from "./QuestionsList"

export const MyQuestionsPage: React.FC = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyQuestion = (question: Question) => !!user && question.userId === user.id
  const { questions, isLoading, error } = useQuestions({ filter: isMyQuestion })

  return (
    <>
      <H1 mb={10}>My Questions</H1>

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
    </>
  )
}
