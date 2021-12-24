import React from "react"
import { Box, Theme } from "@mui/material"
import { RouteComponentProps } from "@reach/router"

import { Question } from "api/questions"
import QuestionsSlider from "components/QuestionsSlider"
import lady from "./lady.png"

const HomePage: React.FC<RouteComponentProps> = () => (
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
        <QuestionsSlider filter={isPublicQuestion} />
      </Box>
    </Box>
  </div>
)

const isPublicQuestion = (question: Question) => !!question.isPublic

const wrapper = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "end",
} as const

const image = {
  margin: (theme: Theme) => ({
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
} as const

const slider = {
  margin: (theme: Theme) => ({
    xs: theme.spacing(5, "auto", 3),
    sm: theme.spacing(5, "auto"),
  }),
} as const

export default HomePage
