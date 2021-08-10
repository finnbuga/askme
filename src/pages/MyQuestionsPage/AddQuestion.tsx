import React, { useState, useRef, useEffect } from "react"
import { Box, Button, CircularProgress, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import { useSelector } from "store"
import { questionsActions } from "store/questionsSlice"
import useDispatchActions from "store/useDispatchActions"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    display: "flex",

    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
}))

export const AddQuestion: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null)
  const user = useSelector((state) => state.user)

  const { addQuestion } = useDispatchActions(questionsActions)

  const [isLoading, setIsLoading] = useState(false)

  const classes = useStyles()

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (textRef.current?.value) {
      setIsLoading(true)
      await addQuestion({ userId: user!.id, text: textRef.current.value })
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
