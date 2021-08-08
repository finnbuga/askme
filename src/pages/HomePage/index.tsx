import React from "react"
import { RouteComponentProps } from "@reach/router"

import QuestionsSlider from "components/QuestionsSlider"
import HowToPlay from "./HowToPlay"

const HomePage: React.FC<RouteComponentProps> = () => (
  <>
    <HowToPlay />

    <QuestionsSlider />
  </>
)

export default HomePage
