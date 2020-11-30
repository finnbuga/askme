import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import Question from "api/interfaces/Question"

export const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)

const userSlice = createSlice({
  name: "questions",
  initialState: {
    isLoading: true,
    error: null as String | null,
    questions: null as Question[] | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (_, action) => ({
      isLoading: true,
      error: null,
      questions: null,
    }))
    builder.addCase(getQuestions.fulfilled, (_, action) => ({
      isLoading: false,
      error: null,
      questions: action.payload,
    }))
    builder.addCase(getQuestions.rejected, (_, action) => ({
      isLoading: false,
      error: action.error.message || "Failed fetching documents",
      questions: null,
    }))
  },
})

export default userSlice.reducer
