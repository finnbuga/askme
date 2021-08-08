import React from "react"
import { Alert } from "@material-ui/core"

import Question from "api/interfaces/Question"
import useQuestions from "hooks/useQuestions"
import useNavigator from "./useNavigator"
import QuestionCard from "./QuestionCard"
import ControlButtons from "./ControlButtons"
import useLike from "./useLike"

const QuestionsSlider: React.FC<{ filter?: (question: Question) => boolean }> = ({ filter }) => {
  const { questions, isLoading, error } = useQuestions(filter)
  const { current, goToNext, goToPrev } = useNavigator(questions.length)
  const currentQuestion = questions[current]
  const { isLiked, like } = useLike(currentQuestion?.id)

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      <QuestionCard>
        {isLoading ? "Loading..." : questions.length === 0 ? "No questions" : currentQuestion.text}
      </QuestionCard>

      <ControlButtons goToPrev={goToPrev} isLiked={isLiked} goToNext={goToNext} like={like} />
    </>
  )
}

export default QuestionsSlider
