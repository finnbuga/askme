import React from "react"
import { Box } from "@material-ui/system"
import { RouteComponentProps } from "@reach/router"

import QuestionsSlider from "components/QuestionsSlider"
import lady from "./lady.png"

const HomePage: React.FC<RouteComponentProps> = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Spark insightful conversations and get you know yourself and your friends better</h1>

    <Box mt={3.5}>
      Pick a random question and speak uninterrupted for 3 minutes. Only then can others share
      thoughts or ask clarifying questions. Now it's your friend's turn.
    </Box>

    <Box mt={3} mb={3}>
      <img src={lady} width={280} height={167} alt="chatty lady" />
    </Box>

    <QuestionsSlider />
  </div>
)

export default HomePage