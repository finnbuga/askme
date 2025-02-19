import { SnackbarProvider } from "notistack"
import { Route, Routes } from "react-router-dom"

import { HomePage } from "pages/HomePage"
import { MyFavouritesPage } from "pages/MyFavouritesPage"
import { MyQuestionsPage } from "pages/MyQuestionsPage"

import { PageWrapper } from "./PageWrapper"
import { ThemeProvider } from "./ThemeProvider"
import { useAuth } from "./useAuth"

export const App: React.FC = () => {
  useAuth()

  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <PageWrapper>
          <Routes>
            <Route path="my-questions" element={<MyQuestionsPage />} />
            <Route path="my-favourites" element={<MyFavouritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </PageWrapper>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
