import React, { useState, useRef, useEffect } from "react"
import { Box, Button, CircularProgress, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Question from "api/interfaces/Question"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    display: "flex",

    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
}))

export const AddQuestion: React.FC<{
  onAdd: (question: Omit<Question, "id" | "userId">) => Promise<any>
}> = ({ onAdd }) => {
  const textRef = useRef<HTMLInputElement>(null)

  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles()

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (textRef.current?.value) {
      setIsLoading(true)
      await onAdd({ text: textRef.current.value })
      setIsLoading(false)
      textRef.current.value = ""
    }
  }

  useEffect(() => {
    textRef.current?.focus()
  }, [])

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <Box mr={1}>
        <TextField inputRef={textRef} variant="outlined" size="small" />
      </Box>

      <Button type="submit" color="primary" variant="contained" disabled={isLoading}>
        Add question
        {isLoading && <CircularProgress size={24} />}
      </Button>
    </form>
  )
}

export default AddQuestion
