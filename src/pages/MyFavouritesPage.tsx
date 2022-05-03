import { Box, Alert } from "@mui/material"

import { useSelector } from "store"
import QuestionsSlider from "components/QuestionsSlider"

import type { Question } from "api/questions"

const MyFavouritesPage: React.FC = () => {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const isMyFavourite = (question: Question) => !!user?.likedQuestions?.includes(question.id)

  return (
    <>
      <h1>My Favourites</h1>

      <Box sx={{ mt: 10 }}>
        {isAuthenticating ? null : !user ? (
          <Alert severity="info">In order to add your favourites please login</Alert>
        ) : (
          <QuestionsSlider filter={isMyFavourite} />
        )}
      </Box>
    </>
  )
}

export default MyFavouritesPage
