import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"

import { questionsRef } from "../firebase"
import Question from "interfaces/Question"
import QuestionsSlider from "components/QuestionsSlider"

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([])

  useEffect(() => {
    questionsRef.get().then((querySnapshot) => {
      const fetchedQuestions: Question[] = []
      querySnapshot.forEach((doc) => {
        fetchedQuestions.push({ id: doc.id, text: doc.data().text })
      })
      setQuestions(fetchedQuestions)
    })
  }, [])

  return questions
}

const AllQuestionsPage: React.FC<RouteComponentProps> = () => {
  const questions = useQuestions()

  return <QuestionsSlider questions={questions} />
}

export default AllQuestionsPage
