import { createTheme, Theme } from "@material-ui/core/styles"
import {} from "@material-ui/styles"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

const palette = {
  primary: {
    main: "#137EC2",
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
