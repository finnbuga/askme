import { render, screen } from "testing"

import { getQuestions } from "api/questions"

import { QuestionsSlider } from "./QuestionsSlider"

jest.mock("api/questions")
const getQuestionsMock = getQuestions as jest.MockedFunction<typeof getQuestions>

const text = "Who are you?"
const questions = [
  {
    id: "id",
    text,
    userId: "userId",
    isPublic: true,
    timestamp: Date.now(),
  },
]

describe("QuestionsSlider", () => {
  test("shows question", async () => {
    getQuestionsMock.mockResolvedValueOnce(questions)
    render(<QuestionsSlider />)

    expect(getQuestionsMock).toHaveBeenCalledTimes(1)

    await screen.findByText(text)
  })
})
