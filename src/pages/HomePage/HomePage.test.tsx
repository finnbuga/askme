import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import type { ReactNode } from "react"

import HomePage from "./HomePage"

const queryClient = new QueryClient()

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("HomePage", () => {
  test("displays intro text", () => {
    render(<HomePage />, { wrapper: Provider })
    expect(
      screen.getByText(
        "Spark insightful conversations and get you know yourself and your friends better"
      )
    ).toBeInTheDocument()
  })
})
