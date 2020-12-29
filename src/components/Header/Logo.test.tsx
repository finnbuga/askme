import React from "react"
import { render, screen } from "@testing-library/react"
import Logo from "./Logo"

test("renders logo text", () => {
  render(<Logo />)
  const linkElement = screen.getByText("Ask me!")
  expect(linkElement).toBeInTheDocument()
})

test("renders logo as link", () => {
  render(<Logo />)
  expect(screen.getByText("Ask me!").closest("a")).toHaveAttribute("href", "/")
})
