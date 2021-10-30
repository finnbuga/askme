import { configureStore } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux"

import auth from "./usersSlice"
import questions from "./questionsSlice"
import notifications from "./notificationsSlice"

const store = configureStore({
  reducer: {
    auth,
    questions,
    notifications,
  },
})

type Dispatch = typeof store.dispatch
export const useDispatch = () => useReduxDispatch<Dispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
