import React from "react"
import { Card, Container } from "@material-ui/core"
import { Router } from "@reach/router"

import Header from "components/Header"
import AllQuestionsPage from "components/AllQuestionsPage"
import MyQuestionsPage from "components/MyQuestionsPage"

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
        </Router>
      </Card>
    </Container>
  )
}

export default App
