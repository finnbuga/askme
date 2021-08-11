import React, { useState, useRef } from "react"
import { Button, CircularProgress, Stack, TextField } from "@material-ui/core"

import { useSelector } from "store"
import { questionsActions } from "store/questionsSlice"
import useDispatchActions from "store/useDispatchActions"

export const AddQuestion: React.FC = () => {
  const { user } = useSelector((state) => state.user)
  const { addQuestion } = useDispatchActions(questionsActions)

  const textRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (textRef.current?.value) {
      setIsLoading(true)
      await addQuestion({ userId: user!.id, text: textRef.current.value })
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
