import React from "react"
import { IconButton, Card, CardContent, CardActions, makeStyles } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"

import Question from "interfaces/Question"
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
          <SkipPreviousIcon style={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton disabled={!questions[current]}>
          <FavoriteIcon style={{ fontSize: "2.1rem" }} />
        </IconButton>
        <IconButton onClick={goToNext} disabled={!goToNext}>
          <SkipNextIcon style={{ fontSize: "3rem" }} />
        </IconButton>
      </CardActions>
    </main>
  )
}

export default QuestionsSlider
