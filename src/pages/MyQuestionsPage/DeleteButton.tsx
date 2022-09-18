import { IconButton, CircularProgress } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useMutation, useQueryClient } from "react-query"

import { deleteQuestion } from "api/questions"
import type { Question } from "api/questions"

const DeleteButton: React.FC<{ id: Question["id"] }> = ({ id }) => {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(deleteQuestion, {
    onSuccess: () => queryClient.invalidateQueries("questions"),
  })

  return (
    <IconButton onClick={() => mutate(id)} edge="end">
      {isLoading ? <CircularProgress size={24} /> : <DeleteIcon />}
    </IconButton>
  )
}

export default DeleteButton
