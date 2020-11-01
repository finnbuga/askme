import React, { useState } from "react"
import { IconButton, Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import { Favorite, SkipPrevious, SkipNext } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "1.2rem",
    lineHeight: "6rem",
    minHeight: 300,
  },
}))

const useQuestions = () => {
  const questions = [
    "What do you appreciate the most about your partner?",
    "What is the most important thing to you?",
    "What would you like your partner to appreciate more?",
  ]
  const [index, setIndex] = useState(0)
  const showPrevious = () => setIndex((index + questions.length - 1) % questions.length)
  const showNext = () => setIndex((index + 1) % questions.length)
  const question = questions[index]

  return { question, showPrevious, showNext }
}

function Questions() {
  const { question, showPrevious, showNext } = useQuestions()

  const classes = useStyles()

  return (
    <main style={{ backgroundColor: "white", padding: "1rem" }}>
      <Card className={classes.root}>
        <CardContent>
          <h1>{question}</h1>
        </CardContent>
      </Card>

      <CardActions style={{ justifyContent: "center" }}>
        <IconButton aria-label="previous" onClick={showPrevious}>
          <SkipPrevious style={{ fontSize: "4rem" }} />
        </IconButton>
        <IconButton aria-label="like">
          <Favorite style={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton aria-label="next" onClick={showNext}>
          <SkipNext style={{ fontSize: "4rem" }} />
        </IconButton>
      </CardActions>
    </main>
  )
}

export default Questions
