import { configureStore } from "@reduxjs/toolkit"
import { createSelectorHook, useDispatch as useReduxDispatch } from "react-redux"

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

type Dispatch = typeof store.dispatch
export const useDispatch = () => useReduxDispatch<Dispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useSelector = createSelectorHook<RootState>()

export default store
