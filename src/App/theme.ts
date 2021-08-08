import { createTheme } from "@material-ui/core/styles"
import teal from "@material-ui/core/colors/teal"

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
  spacing: 8,
})
