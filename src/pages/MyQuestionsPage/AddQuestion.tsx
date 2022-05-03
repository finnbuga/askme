import { Button, CircularProgress, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { useAsyncFn } from "react-use"
import { useDispatch } from "store"

import { addQuestion as addQuestionThunk } from "store/questionsSlice"

interface Form {
  text: string
}

const AddQuestion: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Form>()

  const dispatch = useDispatch()
  const [{ loading }, addQuestion] = useAsyncFn(({ text }: Form) =>
    dispatch(addQuestionThunk({ text })).then(() => reset({ text: "" }))
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
