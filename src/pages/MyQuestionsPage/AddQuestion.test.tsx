import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { render, screen } from "@testing-library/react"

import AddQuestion from "./AddQuestion"

const store = configureStore({ reducer: { user: () => null } })
const ReduxProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

describe("AddQuestion", () => {
  test("renders the right CTA", () => {
    render(<AddQuestion />, { wrapper: ReduxProvider })
    const button = screen.getByText("Add question")
    expect(button).toBeInTheDocument()
  })
})
