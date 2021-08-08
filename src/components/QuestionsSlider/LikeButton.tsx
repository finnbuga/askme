import React from "react"
import { useSelector } from "store"
import { IconButton } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import Question from "api/interfaces/Question"
import { addLikedQuestion, removeLikedQuestion } from "store/userSlice"
import { useNotifications } from "store/useNotifications"

const style = {
  fontSize: "2.4rem",
}

const LikeButton: React.FC<{ questionId: Question["id"] }> = ({ questionId: id }) => {
  const user = useSelector((state) => state.user)
  const { notifyError } = useNotifications()

  const isLiked = user?.likedQuestions?.includes(id)

  const handleLike = () => {
    if (!user) {
      notifyError("You can't like if you're not logged in")
    } else if (isLiked) {
      removeLikedQuestion(id)
    } else {
      addLikedQuestion(id)
    }
  }

  return (
    <IconButton onClick={handleLike} color={isLiked ? "secondary" : "default"}>
      {isLiked ? <FavoriteIcon style={style} /> : <FavoriteBorderIcon style={style} />}
    </IconButton>
  )
}

export default LikeButton
