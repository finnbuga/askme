import { render, screen } from "@testing-library/react"

import HomePage from "./HomePage"

describe("HomePage", () => {
  test("displays intro text", () => {
    render(<HomePage />)
    screen.getByText(
      "Spark insightful conversations and get you know yourself and your friends better"
    )
  })
})
