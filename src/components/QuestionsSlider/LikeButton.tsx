import React from "react"
import { IconButton } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import { useDispatch, useSelector } from "store"
import { notifyError } from "store/notificationsSlice"
import { likeQuestion, unlikeQuestion } from "store/userSlice"

import type { Question } from "api/questions"

const large = {
  fontSize: "2.4rem",
}

const LikeButton: React.FC<{ questionId: Question["id"] }> = ({ questionId: id }) => {
  const user = useSelector((state) => state.user.user)
  const isLiked = user?.likedQuestions?.includes(id)

  const dispatch = useDispatch()

  const handleLike = () => {
    if (!user) {
      notifyError("You can't like if you're not logged in")
    } else if (isLiked) {
      dispatch(unlikeQuestion(id))
    } else {
      dispatch(likeQuestion(id))
    }
  }

  return (
    <IconButton onClick={handleLike} color={isLiked ? "error" : "default"}>
      {isLiked ? <FavoriteIcon style={large} /> : <FavoriteBorderIcon style={large} />}
    </IconButton>
  )
}

export default LikeButton
