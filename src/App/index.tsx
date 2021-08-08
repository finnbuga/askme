import React from "react"
import { Router } from "@reach/router"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, Theme } from "@material-ui/core"
import teal from "@material-ui/core/colors/teal"

import "./getUser"
import HomePage from "pages/HomePage"
import MyQuestionsPage from "pages/MyQuestionsPage"
import MyFavouritesPage from "pages/MyFavouritesPage"
import Header from "./Header"
import PageWrapper from "./Header/PageWrapper"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
  },
  spacing: 8,
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Header />
        <Router component="main" style={{ padding: 24 }}>
          <MyQuestionsPage path="my-questions" />
          <MyFavouritesPage path="my-favourites" />
          <HomePage path="*" />
        </Router>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
