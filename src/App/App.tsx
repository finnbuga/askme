import { Routes, Route } from "react-router-dom"
import { SnackbarProvider } from "notistack"

import { HomePage } from "pages/HomePage"
import { MyQuestionsPage } from "pages/MyQuestionsPage"
import { MyFavouritesPage } from "pages/MyFavouritesPage"

import { useAuth } from "./useAuth"
import { ThemeProvider } from "./ThemeProvider"
import { PageWrapper } from "./PageWrapper"

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
