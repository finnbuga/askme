import { Routes, Route } from "react-router-dom"

import HomePage from "pages/HomePage"
import MyQuestionsPage from "pages/MyQuestionsPage"
import MyFavouritesPage from "pages/MyFavouritesPage"

import useAuth from "./useAuth"
import ThemeProvider from "./ThemeProvider"
import PageWrapper from "./PageWrapper"

const App: React.FC = () => {
  useAuth()

  return (
    <ThemeProvider>
      <PageWrapper>
        <Routes>
          <Route path="my-questions" element={<MyQuestionsPage />} />
          <Route path="my-favourites" element={<MyFavouritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
