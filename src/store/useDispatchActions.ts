import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

export function useDispatchActions<A, M extends ActionCreatorsMapObject<A>>(actionCreators: M): M {
  const dispatch = useDispatch()

  return bindActionCreators(actionCreators, dispatch)
}

export default useDispatchActions
