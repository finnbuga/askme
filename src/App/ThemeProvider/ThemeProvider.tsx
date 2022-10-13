import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import type { ReactNode } from "react"

import { theme } from "./theme"

export const ThemeProvider: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
