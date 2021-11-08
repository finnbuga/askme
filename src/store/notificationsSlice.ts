import { AlertColor } from "@mui/material"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const notificationsSlice = createSlice({
  name: "comparison",
  initialState: [] as Array<{ message: string; severity: AlertColor }>,
  reducers: {
    notifySuccess(state, action: PayloadAction<string>) {
      const message = action.payload
      state.push({ message, severity: "success" })
    },
    notifyError(state, action: PayloadAction<string>) {
      const message = action.payload
      state.push({ message, severity: "error" })
    },
    showNext(state) {
      state.shift()
    },
  },
})

export const { notifySuccess, notifyError, showNext } = notificationsSlice.actions

export default notificationsSlice.reducer
