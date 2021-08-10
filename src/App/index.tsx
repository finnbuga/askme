import React from "react"
import { Router } from "@reach/router"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, Theme } from "@material-ui/core"

import HomePage from "pages/HomePage"
import MyQuestionsPage from "pages/MyQuestionsPage"
import MyFavouritesPage from "pages/MyFavouritesPage"
import useAuthentication from "./useAuthentication"
import { theme } from "./theme"
import PageWrapper from "./PageWrapper"
import Header from "./Header"
import Notifications from "./Notifications"

declare module "@material-ui/styles" {
  interface DefaultTheme extends Theme {}
}

const App: React.FC = () => {
  useAuthentication()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Notifications />
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
