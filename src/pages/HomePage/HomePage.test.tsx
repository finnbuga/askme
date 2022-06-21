import { render, screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import type { ReactNode } from "react"

import { getQuestions } from "api/questions"

import HomePage from "./HomePage"

jest.mock("api/questions")
const getQuestionsMock = getQuestions as jest.MockedFunction<typeof getQuestions>

const queryClient = new QueryClient()
const Provider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("HomePage", () => {
  test("displays intro text", async () => {
    render(<HomePage />, { wrapper: Provider })
    getQuestionsMock.mockResolvedValueOnce([])

    expect(getQuestionsMock).toHaveBeenCalledTimes(1)

    await waitFor(() =>
      expect(
        screen.getByText(
          "Spark insightful conversations and get you know yourself and your friends better"
        )
      ).toHaveTextContent(
        "Spark insightful conversations and get you know yourself and your friends better"
      )
    )
    // await screen.findByText(
    //   "Spark insightful conversations and get you know yourself and your friends better"
    // )
  })
})
