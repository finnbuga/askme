import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert } from "@material-ui/core"

import { useSelector } from "store"
import QuestionsSlider from "components/QuestionsSlider"
import Question from "api/interfaces/Question"

const MyFavouritesPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.auth)
  const isMyFavourite = (question: Question) => !!user?.likedQuestions?.includes(question.id)

  if (isAuthenticating) {
    return null
  }
  if (!user) {
    return <Alert severity="info">In order to add your favourites please login</Alert>
  }

  return <QuestionsSlider filter={isMyFavourite} />
}

export default MyFavouritesPage
