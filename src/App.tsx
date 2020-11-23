import React from "react"
import { Card, Container } from "@material-ui/core"

import Header from "./components/Header"
import AllQuestionsPage from "./components/AllQuestionsPage"

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
          <AllQuestionsPage />
        </Card>
      </Container>
    </div>
  )
}

export default App
