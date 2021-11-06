import React, { useState } from "react"
import { IconButton, SvgIcon } from "@material-ui/core"

const useNavigator = (size: number) => {
  const [current, setCurrent] = useState(0)
  const goToNext = size > 0 ? () => setCurrent((current + 1) % size) : undefined
  const goToPrev = size > 0 ? () => setCurrent((current + size - 1) % size) : undefined

  const NextButton: React.FC = () => (
    <IconButton onClick={goToNext} disabled={!goToNext}>
      <NextIcon />
    </IconButton>
  )

  const PrevButton: React.FC = () => (
    <IconButton onClick={goToPrev} disabled={!goToPrev}>
      <PreviousIcon />
    </IconButton>
  )

  return { current, NextButton, PrevButton }
}

const NextIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 32 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M17.8204 14.1667L23.6538 20L17.8204 25.8334" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)

const PreviousIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <SvgIcon viewBox="0 0 41 40" color="primary" style={{ fontSize: 32 }}>
    <svg fill="none">
      <circle cx="20.2629" cy="20" r="20" fill="#DEDEDE" />
      <path d="M23.1796 25.8333L17.3462 20L23.1796 14.1666" stroke="#137EC2" />
    </svg>
  </SvgIcon>
)

export default useNavigator
