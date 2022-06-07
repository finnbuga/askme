import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { QueryClient, QueryClientProvider } from "react-query"

import { theme } from "App/ThemeProvider/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { defaultViewport: "tablet", disable: false },
}

const queryClient = new QueryClient()

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </ThemeProvider>
  ),
]
