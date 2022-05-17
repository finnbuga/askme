import { createTheme } from "@mui/material/styles"
import type { Theme } from "@mui/material"

import "./theme.css"

declare module "@mui/material/styles" {
  type DefaultTheme = Theme
}

const palette = {
  primary: {
    main: "#137EC2",
  },
  text: {
    primary: "#525252",
  },
} as const

export const theme = createTheme({
  palette,
  spacing: 8,
  typography: {
    h1: {
      color: palette.primary.main,
      fontSize: "1.36rem",
      lineHeight: 1.36,
      marginTop: 0,
      textAlign: "center",
    },
    h2: {
      color: palette.primary.main,
      fontSize: "1.25rem",
      lineHeight: 1.65,
    },
    fontFamily: "Lato, sans-serif",
  },
})

theme.components = {
  MuiCssBaseline: {
    styleOverrides: {
      ...theme.typography,
      body: theme.typography.body1,
    },
  },
}
