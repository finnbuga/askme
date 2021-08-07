import React from "react"
import { Router } from "@reach/router"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { Card, Container, Theme } from "@material-ui/core"

import "components/getUser"
import Header from "components/Header"
import AllQuestionsPage from "components/AllQuestionsPage"
import MyQuestionsPage from "components/MyQuestionsPage"
import MyFavouritesPage from "components/MyFavouritesPage"
import HowToPlayPage from "components/HowToPlayPage"

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
            <AllQuestionsPage path="/" />
            <MyQuestionsPage path="my-questions" />
            <MyFavouritesPage path="my-favourites" />
            <HowToPlayPage path="how-to-play" />
          </Router>
        </Card>
      </Container>
    </ThemeProvider>
  )
}

export default App
