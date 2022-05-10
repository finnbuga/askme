import { Box, Alert, IconButton, SvgIcon } from "@mui/material"
import type { SxProps } from "@mui/material"
import { useAsync } from "react-use"

import type { Question } from "api/questions"
import { useDispatch, useSelector } from "store"
import { getQuestions } from "store/questionsSlice"

import LikeButton from "./LikeButton"
import useNavigator from "./useNavigator"

const QuestionsSlider: React.FC<{ filter?: (question: Question) => boolean }> = ({ filter }) => {
  const dispatch = useDispatch()
  const { loading, error } = useAsync(() => dispatch(getQuestions()))

  const allQuestions = useSelector((state) => state.questions)
  const questions = filter ? allQuestions.filter(filter) : allQuestions

  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentQuestion = questions[current]

  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }

  return (
    <>
      <Box sx={wrapper}>
        <Box component="h1" mt={2}>
          {loading ? "Loading..." : questions.length === 0 ? "No questions" : currentQuestion.text}
        </Box>

        {questions.length > 0 && (
          <Box sx={buttonsWrapper}>
            <IconButton onClick={goToPrev} disabled={!goToPrev}>
              <PreviousIcon />
            </IconButton>

            <LikeButton questionId={currentQuestion.id} />

            <IconButton onClick={goToNext} disabled={!goToNext}>
              <NextIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  )
}

const wrapper: SxProps = {
  maxWidth: {
    sm: 600,
    md: 500,
  },
  margin: "0 auto",
  minHeight: 204,
  maxHeight: 278,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  padding: 4,
  boxShadow: "0px 7px 25px 2px rgba(0, 0, 0, 0.1)",
}

const buttonsWrapper: SxProps = {
  marginBottom: 0.5,
  display: "flex",
  justifyContent: "center",
}

const NextIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 32 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M17.8204 14.1667L23.6538 20L17.8204 25.8334" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)

const PreviousIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 32 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M23.1796 25.8333L17.3462 20L23.1796 14.1666" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)

export default QuestionsSlider
