import React from "react"
import { IconButton, CircularProgress } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { useAsyncFn } from "react-use"

import { Question } from "api/questions"
import { useDispatch } from "store"
import { deleteQuestion as deleteQuestionAC } from "store/questionsSlice"

const DeleteButton: React.FC<{ id: Question["id"] }> = ({ id }) => {
  const dispatch = useDispatch()

  const [{ loading }, deleteQuestion] = useAsyncFn(() => dispatch(deleteQuestionAC(id)))

  return (
    <IconButton onClick={deleteQuestion} edge="end">
      {loading ? <CircularProgress size={24} /> : <DeleteIcon />}
    </IconButton>
  )
}

export default DeleteButton
