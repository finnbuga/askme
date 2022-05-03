import { render, screen } from "@testing-library/react"

import Logo from "./Logo"

describe("Logo", () => {
  test("renders the right text", () => {
    render(<Logo />)
    const linkElement = screen.getByText("Ask me!")
    expect(linkElement).toBeInTheDocument()
  })

  test("links to the right href", () => {
    render(<Logo />)
    const linkElement = screen.getByText("Ask me!")
    expect(linkElement).toHaveAttribute("href", "/")
  })

  test("renders the right markup", () => {
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
})
