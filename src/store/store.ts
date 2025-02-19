import { ActionCreatorsMapObject, bindActionCreators, configureStore } from "@reduxjs/toolkit"
import type { TypedUseSelectorHook } from "react-redux"
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux"

import user from "./userSlice"

const store = configureStore({
  reducer: {
    user,
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
