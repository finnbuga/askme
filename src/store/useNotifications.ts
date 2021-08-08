import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { actions } from "./notificationsSlice"

export const useNotifications = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}
