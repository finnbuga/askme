import { render, screen } from "@testing-library/react"

import { Question } from "api/questions"
import AddQuestion from "./AddQuestion"

const mockOnAdd = (question: Omit<Question, "id" | "userId">) => Promise.resolve()

describe("AddQuestion", () => {
  test("renders the right CTA", () => {
    render(<AddQuestion />)
    const button = screen.getByText("Add question")
    expect(button).toBeInTheDocument()
  })
})
