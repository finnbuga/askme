import { useState } from "react"

const useToggle = (initialState: boolean = false): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(initialState)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return [isOpen, open, close]
}

export default useToggle
