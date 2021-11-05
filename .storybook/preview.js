import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import { theme } from "../src/App/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { defaultViewport: "mobile2", disable: false },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
]
