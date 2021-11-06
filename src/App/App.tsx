import React from "react"
import { Router } from "@reach/router"
import { Box } from "@material-ui/system"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import HomePage from "pages/HomePage"
import MyQuestionsPage from "pages/MyQuestionsPage"
import MyFavouritesPage from "pages/MyFavouritesPage"
import useAuth from "./useAuth"
import { theme } from "./theme"
import PageWrapper from "./PageWrapper"
import Header from "./Header"
import Notifications from "./Notifications"

const App: React.FC = () => {
  useAuth()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageWrapper>
        <Notifications />
        <Header />

        <Box component="main" sx={wrapper}>
          <Router>
            <MyQuestionsPage path="my-questions" />
            <MyFavouritesPage path="my-favourites" />
            <HomePage path="*" />
          </Router>
        </Box>
      </PageWrapper>
    </ThemeProvider>
  )
}

const wrapper = {
  padding: 3,
  paddingTop: 0,
} as const

export default App
