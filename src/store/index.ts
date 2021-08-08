import { configureStore } from "@reduxjs/toolkit"
import { createSelectorHook } from "react-redux"

import user from "./userSlice"
import questions from "./questionsSlice"
import notifications from "./notificationsSlice"

const store = configureStore({
  reducer: {
    user,
    questions,
    notifications,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useSelector = createSelectorHook<RootState>()

export const { dispatch } = store

export default store
