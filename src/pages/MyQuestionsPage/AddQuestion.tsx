import React from "react"
import { Button, CircularProgress, Stack, TextField } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useAsyncFn } from "react-use"

import { useDispatch } from "store"
import { questionsActions } from "store/questionsSlice"

const AddQuestion: React.FC = () => {
  const { register, handleSubmit } = useForm<{ text: string }>()

  const dispatch = useDispatch()
  const [{ loading }, addQuestion] = useAsyncFn(
    ({ text }: { text: string }) => dispatch(questionsActions.addQuestion({ text })),
    []
  )

  return (
    <Stack component="form" onSubmit={handleSubmit(addQuestion)} spacing={1} mt={3}>
      <TextField
        inputProps={register("text", { required: true })}
        autoFocus
        variant="outlined"
        size="small"
        fullWidth
      />

      <Button type="submit" disabled={loading} color="primary" variant="contained">
        Add question
        {loading && <CircularProgress size={24} sx={{ position: "absolute" }} />}
      </Button>
    </Stack>
  )
}

export default AddQuestion
