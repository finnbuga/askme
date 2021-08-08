import React from "react"
import { RouteComponentProps } from "@reach/router"

import useQuestions from "../../hooks/useQuestions"
import QuestionsSlider from "components/QuestionsSlider"
import HowToPlay from "./HowToPlay"
import { Divider } from "@material-ui/core"

const HomePage: React.FC<RouteComponentProps> = () => {
  const { questions, isLoading, error } = useQuestions()

  return (
    <>
      <HowToPlay />

      <Divider component="br" />

      {isLoading ? (
        <div>Loading...</div> // TODO show loader
      ) : error ? (
        <div>Error: {error}</div> // TODO show Alert
      ) : (
        <QuestionsSlider questions={questions} />
      )}
    </>
  )
}

export default HomePage
