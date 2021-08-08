import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { actions } from "./notificationsSlice"

const useNotificationsActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}

export default useNotificationsActions
