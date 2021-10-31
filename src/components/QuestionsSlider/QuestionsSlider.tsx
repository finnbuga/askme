import React from "react"
import { Alert, Box } from "@material-ui/core"
import { useAsync } from "react-use"

import useNavigator from "./useNavigator"
import QuestionCard from "./QuestionCard"
import LikeButton from "./LikeButton"

import type { Question } from "api/questions"
import { useDispatch, useSelector } from "store"
import { getQuestions } from "store/questionsSlice"

const buttonsWrapper = {
  margin: 2,
  display: "flex",
  justifyContent: "center",
}

const QuestionsSlider: React.FC<{ filter?: (question: Question) => boolean }> = ({ filter }) => {
  const dispatch = useDispatch()
  const allQuestions = useSelector((state) => state.questions)

  const { loading, error } = useAsync(() => dispatch(getQuestions()))
  const questions = filter ? allQuestions.filter(filter) : allQuestions
  const { current, NextButton, PrevButton } = useNavigator(questions.length)

  const currentQuestion = questions[current]

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      <QuestionCard>
        {loading ? "Loading..." : questions.length === 0 ? "No questions" : currentQuestion.text}
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
