import { useState } from "react"

const useToggle = (initialState: boolean = false): [boolean, () => void, () => void] => {
  const [isOpen, toggle] = useState(initialState)
  const open = () => toggle(true)
  const close = () => toggle(false)

  return [isOpen, open, close]
}

export default useToggle
