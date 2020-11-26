import React from "react"
import { IconButton, CardActions } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"

const styles = {
  bigButton: {
    fontSize: "3rem",
  },
  mediumButton: {
    fontSize: "2.4rem",
  },
}

const ControlButtons: React.FC<{
  goToPrev?: () => void
  goToNext?: () => void
  like?: () => void
}> = ({ goToPrev, goToNext, like }) => (
  <CardActions style={{ justifyContent: "center" }}>
    <IconButton onClick={goToPrev} disabled={!goToPrev}>
      <SkipPreviousIcon style={styles.bigButton} />
    </IconButton>
    <IconButton disabled={!like}>
      <FavoriteIcon style={styles.mediumButton} />
    </IconButton>
    <IconButton onClick={goToNext} disabled={!goToNext}>
      <SkipNextIcon style={styles.bigButton} />
    </IconButton>
  </CardActions>
)

export default ControlButtons
