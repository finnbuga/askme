import React, { useState } from "react"
import { IconButton, CircularProgress } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import Question from "api/interfaces/Question"
import useDispatchActions from "store/useDispatchActions"
import { questionsActions } from "store/questionsSlice"

const DeleteButton: React.FC<{ id: Question["id"] }> = ({ id }) => {
  const { deleteQuestion } = useDispatchActions(questionsActions)
  const [isDeleting, setIsDeleting] = useState<Record<any, boolean>>({})

  const handleDelete = async (id: Question["id"]) => {
    setIsDeleting((state) => ({ ...state, [id]: true }))
    await deleteQuestion(id)
    setIsDeleting((state) => ({ ...state, [id]: false }))
  }

  return (
    <IconButton onClick={() => handleDelete(id)} edge="end">
      {isDeleting[id] ? <CircularProgress size={24} /> : <DeleteIcon />}
    </IconButton>
  )
}

export default DeleteButton
