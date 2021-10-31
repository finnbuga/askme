import { configureStore, ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit"
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux"

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

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const useDispatch = () => useReduxDispatch<typeof store.dispatch>()

export const useActions = <A, M extends ActionCreatorsMapObject<A>>(actionCreators: M): M => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreators, dispatch)
}

export default store
