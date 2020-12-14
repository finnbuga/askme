import React from "react"

import Question from "api/interfaces/Question"
import useNavigator from "components/useNavigator"
import BigTextCard from "./BigTextCard"
import ControlButtons from "./ControlButtons"
import useLike from "./useLike"

const QuestionsSlider: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentSlideText = questions.length ? questions[current].text : "No questions"

  const { isLiked, like } = useLike(questions[current].id)

  return (
    <>
      <BigTextCard>{currentSlideText}</BigTextCard>

      <ControlButtons goToNext={goToNext} goToPrev={goToPrev} like={like} isLiked={isLiked} />
    </>
  )
}

export default QuestionsSlider
