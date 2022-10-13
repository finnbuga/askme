import { useState } from "react"

export const useToggle = (initialState = false) => {
  const [state, toggle] = useState(initialState)
  const setTrue = () => toggle(true)
  const setFalse = () => toggle(false)

  return [state, setTrue, setFalse] as const
}
