import React from "react"
import { Alert, Box } from "@material-ui/core"

import useQuestions from "hooks/useQuestions"
import useNavigator from "./useNavigator"
import QuestionCard from "./QuestionCard"
import LikeButton from "./LikeButton"

import type { Question } from "api/questions"

const buttonsWrapper = {
  margin: 2,
  display: "flex",
  justifyContent: "center",
}

const QuestionsSlider: React.FC<{ filter?: (question: Question) => boolean }> = ({ filter }) => {
  const { questions, isLoading, error } = useQuestions(filter)
  const { current, NextButton, PrevButton } = useNavigator(questions.length)
  const currentQuestion = questions[current]

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      <QuestionCard>
        {isLoading ? "Loading..." : questions.length === 0 ? "No questions" : currentQuestion.text}
      </QuestionCard>

      {questions.length > 0 && (
        <Box sx={buttonsWrapper}>
          <PrevButton />
          <LikeButton questionId={currentQuestion.id} />
          <NextButton />
        </Box>
      )}
    </>
  )
}

export default QuestionsSlider
