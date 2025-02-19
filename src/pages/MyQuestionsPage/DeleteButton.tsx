import DeleteIcon from "@mui/icons-material/Delete"
import { CircularProgress, IconButton } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import type { Question } from "api/questions"
import { deleteQuestion } from "api/questions"
import { useNotifications } from "hooks/useNotifications"

export const DeleteButton: React.FC<{ id: Question["id"] }> = ({ id }) => {
  const queryClient = useQueryClient()
  const { notifyError, notifySuccess } = useNotifications()

  const { mutate, isPending } = useMutation({
    mutationFn: deleteQuestion,
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: ["questions"] })
      // Optimistically update
      const previousQuestions = queryClient.getQueryData<Question[]>(["questions"])
      const optimisticUpdate = previousQuestions?.filter((q) => q.id !== id)
      queryClient.setQueryData(["questions"], optimisticUpdate)
      return { previousQuestions }
    },
    onSuccess: () => {
      notifySuccess("Question deleted")
    },
    onError: (error: Error, _, context) => {
      notifyError(error)
      // Rollback optimistic update
      queryClient.setQueryData(["questions"], context?.previousQuestions)
    },
  })

  return (
    <IconButton onClick={() => mutate(id)} edge="end">
      {isPending ? <CircularProgress size={24} /> : <DeleteIcon />}
    </IconButton>
  )
}
