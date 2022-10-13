import { useState } from "react"

export const useNavigator = (size: number) => {
  const [current, setCurrent] = useState(0)
  const goToNext = size > 0 ? () => setCurrent((current + 1) % size) : undefined
  const goToPrev = size > 0 ? () => setCurrent((current + size - 1) % size) : undefined

  return { current, goToNext, goToPrev }
}
