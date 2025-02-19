import type { SxProps, Theme } from "@mui/material"
import { Alert, Box, Stack } from "@mui/material"
import { ErrorBoundary } from "react-error-boundary"

import { Question } from "api/questions"
import { QuestionsSlider } from "components/QuestionsSlider"

import lady from "./lady.png"

export const HomePage: React.FC = () => (
  <Stack sx={{ alignItems: "center" }}>
    <h1 style={{ maxWidth: 500 }}>
      Spark insightful conversations and get you know yourself and your friends better
    </h1>

    <Box sx={message}>
      Pick a random question and speak uninterrupted for 3 minutes. Only then can others share
      thoughts or ask clarifying questions. Now it's your friend's turn.
    </Box>

    <Box sx={wrapper}>
      <Box sx={fixedDimensions}>
        <img src={lady} alt="chatty lady" style={{ maxHeight: "100%", maxWidth: "100%" }} />
      </Box>

      <Box sx={fixedDimensions}>
        <ErrorBoundary FallbackComponent={Error}>
          <QuestionsSlider filter={isPublicQuestion} />
        </ErrorBoundary>
      </Box>
    </Box>
  </Stack>
)

const isPublicQuestion = (question: Question) => !!question.isPublic

const Error: React.FC<{ error: Error }> = () => (
  <Alert severity="error">Sorry, an error occured. Please refresh the page.</Alert>
)

const message: SxProps<Theme> = {
  textAlign: "center",
  mt: {
    xs: 3,
    md: 5,
  },
  mb: {
    xs: 2,
    md: 4,
  },
  maxWidth: 600,
}

const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  gap: {
    md: 2.5,
  },
  justifyContent: "center",
  alignItems: "center",
}

const fixedDimensions: SxProps<Theme> = {
  display: "flex",
  width: {
    xs: 358,
    sm: 466,
  },
  height: {
    xs: 214,
    sm: 278,
  },
}
