import { render, screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import type { ReactNode } from "react"

import { getQuestions } from "api/questions"

import QuestionsSlider from "./QuestionsSlider"

jest.mock("api/questions")
const getQuestionsMock = getQuestions as jest.MockedFunction<typeof getQuestions>

const queryClient = new QueryClient()
const Provider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

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
    render(<QuestionsSlider />, { wrapper: Provider })
    getQuestionsMock.mockResolvedValueOnce(questions)

    expect(getQuestionsMock).toHaveBeenCalledTimes(1)

    await waitFor(() => expect(screen.getByLabelText(/question/i)).toHaveTextContent(text))
  })
})
