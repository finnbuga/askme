import { Alert } from "@mui/material"

import type { Question } from "api/questions"
import { QuestionsSlider } from "components/QuestionsSlider"
import { H1 } from "components/ui/H1"
import { useSelector } from "store"

export const MyFavouritesPage: React.FC = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyFavourite = (question: Question) => !!user?.likedQuestions?.includes(question.id)

  return (
    <>
      <H1 mb={10}>My Favourites</H1>

      {isAuthenticating ? null : !user ? (
        <Alert severity="info">In order to add your favourites please login</Alert>
      ) : (
        <QuestionsSlider filter={isMyFavourite} />
      )}
    </>
  )
}
