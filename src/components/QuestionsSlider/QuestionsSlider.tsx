import type { SxProps } from "@mui/material"
import { Alert, Box, IconButton, SvgIcon, Typography } from "@mui/material"

import type { Question } from "api/questions"
import { useQuestions } from "hooks/useQuestions"

import { LikeButton } from "./LikeButton"
import { useNavigator } from "./useNavigator"

export const QuestionsSlider: React.FC<{
  filter?: (question: Question) => boolean
}> = ({ filter }) => {
  const { questions, isLoading, error } = useQuestions({ filter })
  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentQuestion = questions[current]

  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }

  return (
    <Box sx={wrapper}>
      <Typography component="div" variant="h1" aria-label="question" sx={question}>
        {isLoading ? null : questions.length === 0 ? "No questions." : currentQuestion.text}
      </Typography>

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
  )
}

const wrapper: SxProps = {
  mt: 3,
  width: "100%",
  maxWidth: {
    sm: 600,
    md: 500,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  pt: 1,
  pb: 2.3,
  px: 3,
  boxShadow: "0px 7px 25px 2px rgba(0, 0, 0, 0.1)",
}

const question: SxProps = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const buttonsWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
}

const NextIcon: React.FC<{ filled?: boolean }> = () => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 40 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M17.8204 14.1667L23.6538 20L17.8204 25.8334" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)

const PreviousIcon: React.FC<{ filled?: boolean }> = () => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 40 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M23.1796 25.8333L17.3462 20L23.1796 14.1666" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)
