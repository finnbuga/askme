import React from "react"
import { RouteComponentProps, Link } from "@reach/router"

const HowToPlayPage: React.FC<RouteComponentProps> = () => (
  <>
    <p>
      This is a psychologic game meant to sparks insightful conversations with friends. You'll also
      get to know yourself better and build stronger connexions with the other players.
    </p>
    <p>Here's how to play it:</p>
    <p>
      Pick a random question and speak uninterrupted for 3 minutes. Only then can others share
      thoughts or ask clarifying questions.
    </p>
    <p>End the turn and have the next person answer a random question.</p>

    <p>
      Ready to give it a try? <Link to="/">Play {">"}</Link>
    </p>
  </>
)

export default HowToPlayPage
