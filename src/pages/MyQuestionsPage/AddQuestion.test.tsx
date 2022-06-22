import { render, screen } from "testing"

import AddQuestion from "./AddQuestion"

describe("AddQuestion", () => {
  test("renders the right CTA", () => {
    render(<AddQuestion />)
    const button = screen.getByText("Add question")
    expect(button).toBeInTheDocument()
  })
})
