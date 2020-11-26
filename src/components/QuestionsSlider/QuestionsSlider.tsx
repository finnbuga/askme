import React from "react"

import Question from "api/interfaces/Question"
import useNavigator from "components/useNavigator"
import BigTextCard from "./BigTextCard"
import ControlButtons from "./ControlButtons"

const QuestionsSlider: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentSlideText = questions.length ? questions[current].text : "No questions"

  return (
    <>
      <BigTextCard>{currentSlideText}</BigTextCard>

      <ControlButtons goToNext={goToNext} goToPrev={goToPrev} />
    </>
  )
}

export default QuestionsSlider
