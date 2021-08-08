import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { actions } from "./userSlice"

const useUserActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}

export default useUserActions
