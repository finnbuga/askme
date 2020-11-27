import { createSlice } from "@reduxjs/toolkit"

import User from "api/interfaces/User"

const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    setUser: (_, action) => action.payload,
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
