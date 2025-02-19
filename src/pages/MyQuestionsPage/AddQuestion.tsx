import { Button, CircularProgress, Stack, TextField } from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { addQuestion } from "api/questions"
import { useNotifications } from "hooks/useNotifications"

export const AddQuestion: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>()
  const { notifyError } = useNotifications()

  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: addQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questions"] })
      reset({ text: "" })
    },
    onError: notifyError,
  })

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(({ text }) => mutate({ text }))}
      spacing={1}
      mt={3}
    >
      <TextField
        inputProps={register("text", { required: true })}
        autoFocus
        autoComplete="off"
        variant="outlined"
        size="small"
        fullWidth
      />

      <Button type="submit" disabled={isPending} color="primary" variant="contained">
        Add question
        {isPending && <CircularProgress size={24} sx={{ position: "absolute" }} />}
      </Button>
    </Stack>
  )
}
