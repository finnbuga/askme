import React from "react"
import { RouteComponentProps } from "@reach/router"

import { useSelector } from "store"
import useQuestions from "../hooks/useQuestions"
import QuestionsSlider from "components/QuestionsSlider"

const MyFavouritesPage: React.FC<RouteComponentProps> = () => {
  const user = useSelector((state) => state.user)
  const { questions, isLoading, error } = useQuestions()
  const myFavourites = questions?.filter((question) => user?.likedQuestions?.includes(question.id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return <QuestionsSlider questions={myFavourites!} />
}

export default MyFavouritesPage
