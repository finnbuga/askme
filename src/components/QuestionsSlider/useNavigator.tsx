import React from "react"
import { IconButton } from "@material-ui/core"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import { useState } from "react"

const style = {
  fontSize: "3rem",
}

const useNavigator = (size: number) => {
  const [current, setCurrent] = useState(0)
  const goToNext = size > 0 ? () => setCurrent((current + 1) % size) : undefined
  const goToPrev = size > 0 ? () => setCurrent((current + size - 1) % size) : undefined

  const NextButton: React.FC = () => (
    <IconButton onClick={goToNext} disabled={!goToNext}>
      <SkipNextIcon style={style} />
    </IconButton>
  )

  const PrevButton: React.FC = () => (
    <IconButton onClick={goToPrev} disabled={!goToPrev}>
      <SkipPreviousIcon style={style} />
    </IconButton>
  )

  return { current, NextButton, PrevButton }
}

export default useNavigator
