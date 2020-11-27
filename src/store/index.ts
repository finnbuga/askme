import { configureStore } from "@reduxjs/toolkit"
import { createSelectorHook } from "react-redux"

import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export const useSelector = createSelectorHook<RootState>()

export const { dispatch } = store

export default store
