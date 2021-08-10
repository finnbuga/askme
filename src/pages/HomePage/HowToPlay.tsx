import React from "react"
import { Alert, Collapse } from "@material-ui/core"

import useToggle from "hooks/useToggle"

const HowToPlay: React.FC = () => {
  const [isOpen, , close] = useToggle(true)

  return (
    <Collapse in={isOpen}>
      <Alert severity="info" icon={false} onClose={close} sx={{ mb: 3 }}>
        <p>Spark insightful conversations and get you know yourself and your friends better.</p>
        <p>
          Pick a random question and speak uninterrupted for 3 minutes. Only then can others share
          thoughts or ask clarifying questions. End the turn and have the next person answer a
          random question.
        </p>
      </Alert>
    </Collapse>
  )
}

export default HowToPlay
