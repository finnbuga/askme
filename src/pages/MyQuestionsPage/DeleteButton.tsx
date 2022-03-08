import React from "react"
import { IconButton, CircularProgress } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useAsyncFn } from "react-use"

import { Question } from "api/questions"
import { useDispatch } from "store"
import { deleteQuestion as deleteQuestionThunk } from "store/questionsSlice"

const DeleteButton: React.FC<{ id: Question["id"] }> = ({ id }) => {
  const dispatch = useDispatch()
  const [{ loading }, deleteQuestion] = useAsyncFn(() => dispatch(deleteQuestionThunk(id)))

  return (
    <IconButton onClick={deleteQuestion} edge="end">
      {loading ? <CircularProgress size={24} /> : <DeleteIcon />}
    </IconButton>
  )
}

export default DeleteButton
