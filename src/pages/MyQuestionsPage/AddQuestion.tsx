import { Button, CircularProgress, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"

import { addQuestion } from "api/questions"
import { useNotifications } from "hooks/useNotifications"

const AddQuestion: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<{ text: string }>()
  const { notifyError } = useNotifications()

  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation(addQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("questions")
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

      <Button type="submit" disabled={isLoading} color="primary" variant="contained">
        Add question
        {isLoading && <CircularProgress size={24} sx={{ position: "absolute" }} />}
      </Button>
    </Stack>
  )
}

export default AddQuestion
