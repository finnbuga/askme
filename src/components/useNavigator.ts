import { useState } from "react"

const useNavigator = (size: number) => {
  const [current, setCurrent] = useState(0)
  let goToNext, goToPrev
  if (size > 0) {
    goToNext = () => setCurrent((current + 1) % size)
    goToPrev = () => setCurrent((current + size - 1) % size)
  }

  return { current, goToNext, goToPrev }
}

export default useNavigator
