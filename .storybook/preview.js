import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

import { theme } from "App/ThemeProvider/theme"

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
