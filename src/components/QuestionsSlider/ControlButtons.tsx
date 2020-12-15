import React from "react"
import { CardActions, IconButton } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
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
  isLiked?: boolean
  like?: () => Promise<any>
}> = ({ goToPrev, goToNext, like, isLiked }) => (
  <CardActions style={{ justifyContent: "center" }}>
    <IconButton onClick={goToPrev} disabled={!goToPrev}>
      <SkipPreviousIcon style={styles.bigButton} />
    </IconButton>

    <IconButton disabled={!like} onClick={like} color={isLiked ? "secondary" : "default"}>
      {isLiked ? (
        <FavoriteIcon style={styles.mediumButton} />
      ) : (
        <FavoriteBorderIcon style={styles.mediumButton} />
      )}
    </IconButton>

    <IconButton onClick={goToNext} disabled={!goToNext}>
      <SkipNextIcon style={styles.bigButton} />
    </IconButton>
  </CardActions>
)

export default ControlButtons
