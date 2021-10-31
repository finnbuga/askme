import React, { useState, useRef } from "react"
import { Button, CircularProgress, Stack, TextField } from "@material-ui/core"

import { useSelector, useActions } from "store"
import { questionsActions } from "store/questionsSlice"

const AddQuestion: React.FC = () => {
  const user = useSelector((state) => state.user.user)
  const { addQuestion } = useActions(questionsActions)

  const textRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const text = textRef.current?.value
    if (text) {
      setIsLoading(true)
      // @TODO use useAsync
      await addQuestion({ text, userId: user!.id })
      setIsLoading(false)
      textRef.current.value = ""
    }
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} spacing={1} mt={3}>
      <TextField inputRef={textRef} autoFocus variant="outlined" size="small" fullWidth />

      <Button type="submit" disabled={isLoading} color="primary" variant="contained">
        Add question
        {isLoading && <CircularProgress size={24} sx={{ position: "absolute" }} />}
      </Button>
    </Stack>
  )
}

export default AddQuestion
