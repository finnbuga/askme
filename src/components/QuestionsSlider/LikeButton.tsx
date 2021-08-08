import React from "react"
import { useSelector } from "store"
import { IconButton } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import Question from "api/interfaces/Question"
import { addLikedQuestion, removeLikedQuestion } from "store/userSlice"

const style = {
  fontSize: "2.4rem",
}

const LikeButton: React.FC<{ questionId: Question["id"] }> = ({ questionId: id }) => {
  const likedQuestions = useSelector((state) => state.user?.likedQuestions)

  const isLiked = likedQuestions?.includes(id)
  const like = () => (isLiked ? removeLikedQuestion(id) : addLikedQuestion(id))

  return (
    <IconButton disabled={!like} onClick={like} color={isLiked ? "secondary" : "default"}>
      {isLiked ? <FavoriteIcon style={style} /> : <FavoriteBorderIcon style={style} />}
    </IconButton>
  )
}

export default LikeButton
