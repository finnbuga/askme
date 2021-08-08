import React from "react"

import Question from "api/interfaces/Question"
import useNavigator from "./useNavigator"
import QuestionCard from "./QuestionCard"
import ControlButtons from "./ControlButtons"
import useLike from "./useLike"

const QuestionsSlider: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentQuestion = questions[current]

  const { isLiked, like } = useLike(currentQuestion?.id)

  return (
    <>
      <QuestionCard>{questions.length ? currentQuestion.text : "No questions"}</QuestionCard>

      <ControlButtons goToNext={goToNext} goToPrev={goToPrev} like={like} isLiked={isLiked} />
    </>
  )
}

export default QuestionsSlider
