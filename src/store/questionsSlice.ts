import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import Question from "api/interfaces/Question"

export const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)

const userSlice = createSlice({
  name: "questions",
  initialState: [] as Question[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (_, action) => action.payload)
  },
})

export default userSlice.reducer
