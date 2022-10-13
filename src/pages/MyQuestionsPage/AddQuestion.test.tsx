import { render, screen } from "testing"
import userEvent from "@testing-library/user-event"

import * as api from "api/questions"

import { AddQuestion } from "./AddQuestion"

jest.mock("api/questions")

const addQuestionMock = api.addQuestion as jest.MockedFunction<typeof api.addQuestion>

const text = "Example question"

const question = {
  text,
  timestamp: Date.now(),
  userId: undefined,
  id: "id",
}

describe("AddQuestion", () => {
  test("renders the right CTA", () => {
    addQuestionMock.mockResolvedValueOnce(question)
    render(<AddQuestion />)

    const user = userEvent.setup()

    const input = screen.getByText(/text/i)
    user.type(input, text)

    const addButton = screen.getByText("Add question")
    user.click(addButton)
  })
})
