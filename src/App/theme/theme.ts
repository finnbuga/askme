import { createTheme, Theme } from "@mui/material/styles"

import "./theme.css"

declare module "@mui/material/styles" {
  interface DefaultTheme extends Theme {}
}

const palette = {
  primary: {
    main: "#137EC2",
  },
  text: {
    primary: "#525252",
  },
}

const typography = {
  h1: {
    color: palette.primary.main,
    fontSize: "1.36rem",
    lineHeight: 1.36,
    marginTop: 0,
  },
  h2: {
    color: palette.primary.main,
    fontSize: "1.25rem",
    lineHeight: 1.65,
  },
  fontFamily: "Lato, sans-serif",
}

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...typography,
      },
    },
  },
  palette,
  typography,
  spacing: 8,
})
