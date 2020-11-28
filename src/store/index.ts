import { configureStore } from "@reduxjs/toolkit"
import { createSelectorHook } from "react-redux"

import userReducer from "./userSlice"
import questionsReducer from "./questionsSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    questions: questionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useSelector = createSelectorHook<RootState>()

export const { dispatch } = store

export default store
