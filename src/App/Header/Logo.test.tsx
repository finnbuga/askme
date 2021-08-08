import React from "react"
import { render, screen } from "@testing-library/react"
import Logo from "./Logo"

describe("Logo", () => {
  let container: HTMLElement
  beforeEach(() => {
    container = render(<Logo />).container
  })

  test("renders the right text", () => {
    const linkElement = screen.getByText("Ask me!")
    expect(linkElement).toBeInTheDocument()
  })

  test("links to the right href", () => {
    const linkElement = screen.getByText("Ask me!")
    expect(linkElement).toHaveAttribute("href", "/")
  })

  test("renders the right markup", () => {
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
})
