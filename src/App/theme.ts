import { createTheme, Theme } from "@material-ui/core/styles"
import teal from "@material-ui/core/colors/teal"
import {} from "@material-ui/styles"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
  spacing: 8,
})
