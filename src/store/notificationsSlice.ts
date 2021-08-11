import { AlertColor } from "@material-ui/core"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const notificationsSlice = createSlice({
  name: "comparison",
  initialState: [] as Array<{ message: string; severity: AlertColor }>,
  reducers: {
    notifySuccess(state, action: PayloadAction<string>) {
      state.push({ message: action.payload, severity: "success" })
    },
    notifyError(state, action: PayloadAction<string>) {
      state.push({ message: action.payload, severity: "error" })
    },
    showNext(state) {
      console.log("next")
      state.shift()
    },
  },
})

export const notificationsActions = notificationsSlice.actions

export default notificationsSlice.reducer
