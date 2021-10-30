import React from "react"
import { useSelector } from "store"
import { IconButton } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import Question from "api/interfaces/Question"
import useDispatchActions from "store/useDispatchActions"
import { notificationsActions } from "store/notificationsSlice"
import { userActions } from "store/usersSlice"

const style = {
  fontSize: "2.4rem",
}

const LikeButton: React.FC<{ questionId: Question["id"] }> = ({ questionId: id }) => {
  const { user } = useSelector((state) => state.auth)
  const { addLikedQuestion, removeLikedQuestion } = useDispatchActions(userActions)
  const { notifyError } = useDispatchActions(notificationsActions)

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
    <IconButton onClick={handleLike} color={isLiked ? "error" : "default"}>
      {isLiked ? <FavoriteIcon style={style} /> : <FavoriteBorderIcon style={style} />}
    </IconButton>
  )
}

export default LikeButton
