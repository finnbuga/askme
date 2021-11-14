import React from "react"
import { IconButton, SvgIcon } from "@mui/material"

import { useDispatch, useSelector } from "store"
import { notifyError } from "store/notificationsSlice"
import { likeQuestion, unlikeQuestion } from "store/userSlice"

import type { Question } from "api/questions"

const LikeButton: React.FC<{ questionId: Question["id"] }> = ({ questionId: id }) => {
  const user = useSelector((state) => state.user.user)
  const isLiked = user?.likedQuestions?.includes(id)

  const dispatch = useDispatch()

  const handleLike = () => {
    if (!user) {
      dispatch(notifyError("Please log in first"))
    } else if (isLiked) {
      dispatch(unlikeQuestion(id))
    } else {
      dispatch(likeQuestion(id))
    }
  }

  return (
    <IconButton onClick={handleLike}>
      <HeartIcon filled={isLiked} />
    </IconButton>
  )
}

const HeartIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <SvgIcon viewBox="0 0 33 32" color="primary" style={{ fontSize: 32 }}>
    <svg fill={filled ? "currentColor" : "none"} strokeWidth={1.5} stroke="#137EC2">
      <path d="M16.1753 27.805C13.2811 26.0239 10.5888 23.9275 8.14632 21.5536C6.42919 19.8439 5.12194 17.7597 4.32473 15.4605C2.89013 11.0004 4.56584 5.89444 9.25543 4.38336C11.7201 3.58991 14.4119 4.0434 16.4887 5.60197C18.5664 4.0453 21.2572 3.59197 23.722 4.38336C28.4116 5.89444 30.0994 11.0004 28.6648 15.4605C27.8676 17.7597 26.5603 19.8439 24.8432 21.5536C22.4008 23.9275 19.7084 26.0239 16.8142 27.805L16.5008 28L16.1753 27.805Z" />
      <path d="M21.4797 9.40405C22.9001 9.85779 23.9094 11.133 24.0355 12.6334" />
    </svg>
  </SvgIcon>
)

export default LikeButton
