import { Router } from "@reach/router"
import { ThemeProvider } from "@mui/material/styles"
import { Box, CssBaseline } from "@mui/material"

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

        <Box component="main" sx={{ p: 3, pt: 0 }}>
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

export default App
