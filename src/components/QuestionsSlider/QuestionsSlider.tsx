import React from "react"
import { Box, Alert } from "@material-ui/core"
import { useAsync } from "react-use"

import { useDispatch, useSelector } from "store"
import { getQuestions } from "store/questionsSlice"
import useNavigator from "./useNavigator"
import LikeButton from "./LikeButton"

import type { Question } from "api/questions"

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
      <Box sx={wrapper}>
        <Box component="h1" sx={question}>
          {loading ? "Loading..." : questions.length === 0 ? "No questions" : currentQuestion.text}
        </Box>

        {questions.length > 0 && (
          <Box sx={buttonsWrapper}>
            <PrevButton />
            <LikeButton questionId={currentQuestion.id} />
            <NextButton />
          </Box>
        )}
      </Box>
    </>
  )
}

const wrapper = {
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: 4,
  boxShadow: "0px 7px 25px 2px rgba(0, 0, 0, 0.1)",
} as const

const question = {
  marginTop: 2,
} as const

const buttonsWrapper = {
  marginBottom: 0.5,
  display: "flex",
  justifyContent: "center",
} as const

export default QuestionsSlider
