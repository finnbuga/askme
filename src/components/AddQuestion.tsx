import React, { useRef } from "react"
import { Box, Button, TextField } from "@material-ui/core"

import Question from "api/interfaces/Question"

export const AddQuestion: React.FC<{
  onAdd: (question: Omit<Question, "id">) => void
}> = ({ onAdd }) => {
  const textRef = useRef<HTMLInputElement>(null)

  return (
    <Box
      component="form"
      mt={3}
      display="flex"
      onSubmit={(e) => {
        if (textRef.current?.value) {
          onAdd({ text: textRef.current.value })
          textRef.current.value = ""
        }
        e.preventDefault()
      }}
    >
      <Box mr={1}>
        <TextField inputRef={textRef} variant="outlined" size="small" />
      </Box>

      <Button type="submit" color="primary" variant="contained">
        Add question
      </Button>
    </Box>
  )
}

export default AddQuestion
