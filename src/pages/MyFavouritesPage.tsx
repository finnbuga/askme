import React from "react"
import { RouteComponentProps } from "@reach/router"

import { useSelector } from "store"
import QuestionsSlider from "components/QuestionsSlider"
import Question from "api/interfaces/Question"

const MyFavouritesPage: React.FC<RouteComponentProps> = () => {
  const user = useSelector((state) => state.user)
  const isMyFavourite = (question: Question) => !!user?.likedQuestions?.includes(question.id)

  if (!user) {
    return <p>In order to add your favourites please login</p>
  }

  return <QuestionsSlider filter={isMyFavourite} />
}

export default MyFavouritesPage
