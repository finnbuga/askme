import React from "react"
import { Router } from "@reach/router"
import { Card, Container } from "@material-ui/core"

import "components/getUser"
import Header from "components/Header"
import AllQuestionsPage from "components/AllQuestionsPage"
import MyQuestionsPage from "components/MyQuestionsPage"
import MyFavouritesPage from "components/MyFavouritesPage"
import HowToPlayPage from "components/HowToPlayPage"

const style = {
  triplePadding: {
    padding: 24,
  },
}

function App() {
  return (
    <Container maxWidth="xs">
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
  )
}

export default App
