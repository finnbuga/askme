import React from "react"
import { IconButton, Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import { Favorite, SkipPrevious, SkipNext } from "@material-ui/icons"

import Question from "../interfaces/Question"
import useNavigator from "./useNavigator"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    lineHeight: "3rem",
    minHeight: 250,
  },
}))

interface Props {
  questions: Question[]
}

const QuestionsSlider: React.FC<Props> = ({ questions }) => {
  const { current, goToNext, goToPrev } = useNavigator(questions.length)

  const classes = useStyles()

  return (
    <main style={{ margin: 24, marginBottom: 0 }}>
      <Card className={classes.root}>
        <CardContent>
          <h1>{questions.length > 0 ? questions[current].text : "No questions"}</h1>
        </CardContent>
      </Card>

      <CardActions style={{ justifyContent: "center" }}>
        <IconButton onClick={goToPrev} disabled={!goToPrev}>
          <SkipPrevious style={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton disabled={!questions[current]}>
          <Favorite style={{ fontSize: "2.1rem" }} />
        </IconButton>
        <IconButton onClick={goToNext} disabled={!goToNext}>
          <SkipNext style={{ fontSize: "3rem" }} />
        </IconButton>
      </CardActions>
    </main>
  )
}

export default QuestionsSlider
