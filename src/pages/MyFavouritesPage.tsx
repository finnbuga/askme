import React from "react"
import { RouteComponentProps } from "@reach/router"
import { Alert } from "@mui/material"

import { useSelector } from "store"
import QuestionsSlider from "components/QuestionsSlider"

import type { Question } from "api/questions"

const MyFavouritesPage: React.FC<RouteComponentProps> = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyFavourite = (question: Question) => !!user?.likedQuestions?.includes(question.id)

  return (
    <>
      <h2>My Favourites</h2>

      {isAuthenticating ? null : !user ? (
        <Alert severity="info">In order to add your favourites please login</Alert>
      ) : (
        <QuestionsSlider filter={isMyFavourite} />
      )}
    </>
  )
}

export default MyFavouritesPage
