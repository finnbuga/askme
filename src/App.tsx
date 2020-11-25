import React from "react"
import { Card, Container } from "@material-ui/core"
import { Router } from "@reach/router"

import Header from "components/Header"
import AllQuestionsPage from "components/AllQuestionsPage"
import MyQuestionsPage from "components/MyQuestionsPage"

const style = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "rgb(245, 245, 245)",
  },
}

function App() {
  return (
    <div style={style.wrapper}>
      <Container maxWidth="xs">
        <Card>
          <Header />
          <Router>
            <AllQuestionsPage path="/" />
            <MyQuestionsPage path="my-questions" />
          </Router>
        </Card>
      </Container>
    </div>
  )
}

export default App
