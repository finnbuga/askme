import { ErrorBoundary } from "react-error-boundary"
import { Box, Alert } from "@mui/material"
import type { SxProps, Theme } from "@mui/material"

import { Question } from "api/questions"
import QuestionsSlider from "components/QuestionsSlider"

import lady from "./lady.png"

const HomePage: React.FC = () => (
  <div style={{ textAlign: "center" }}>
    <h1 style={{ maxWidth: 500, margin: "auto" }}>
      Spark insightful conversations and get you know yourself and your friends better
    </h1>

    <Box mt={3.5} mx="auto" style={{ maxWidth: 600 }}>
      Pick a random question and speak uninterrupted for 3 minutes. Only then can others share
      thoughts or ask clarifying questions. Now it's your friend's turn.
    </Box>

    <Box sx={wrapper}>
      <Box sx={image}>
        <img src={lady} alt="chatty lady" style={{ maxHeight: "100%", maxWidth: "100%" }} />
      </Box>

      <Box sx={slider}>
        <ErrorBoundary FallbackComponent={Error}>
          <QuestionsSlider filter={isPublicQuestion} />
        </ErrorBoundary>
      </Box>
    </Box>
  </div>
)

const isPublicQuestion = (question: Question) => !!question.isPublic

const Error: React.FC<{ error: Error }> = () => (
  <Alert severity="error">Sorry, an error occured. Please refresh the page.</Alert>
)

const wrapper: SxProps = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "end",
}

const image: SxProps<Theme> = {
  margin: (theme) => ({
    xs: theme.spacing(5, "auto", 3),
    // sm: theme.spacing(5, "auto", 7),
  }),
  width: {
    xs: 280,
    sm: 466,
  },
  height: {
    xs: 167,
    sm: 278,
  },
}

const slider: SxProps<Theme> = {
  margin: (theme) => ({
    flexGrow: 1,
    xs: theme.spacing(5, "auto", 3),
    sm: theme.spacing(5, "auto"),
  }),
}

export default HomePage
