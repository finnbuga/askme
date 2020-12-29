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

test("renders logo markup", () => {
  const { container } = render(<Logo />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <h6
        class="MuiTypography-root MuiTypography-h6"
        style="flex-grow: 1;"
      >
        <a
          aria-current="page"
          href="/"
          style="text-decoration: none;"
        >
          Ask me!
        </a>
      </h6>
    </div>
  `)
})
