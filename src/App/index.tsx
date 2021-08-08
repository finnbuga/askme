import React from "react"
import { Router } from "@reach/router"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { Card, Container, Theme } from "@material-ui/core"

import "./getUser"
import Header from "App/Header"
import HomePage from "pages/HomePage"
import MyQuestionsPage from "pages/MyQuestionsPage"
import MyFavouritesPage from "pages/MyFavouritesPage"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme()

const style = {
  triplePadding: {
    padding: 24,
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Card>
          <Header />

          <Router component="main" style={style.triplePadding}>
            <MyQuestionsPage path="my-questions" />
            <MyFavouritesPage path="my-favourites" />
            <HomePage path="*" />
          </Router>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default App
