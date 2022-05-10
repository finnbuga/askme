import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import { Question } from "api/questions"

export const addQuestion = createAsyncThunk("questions/addQuestion", api.addQuestion)

export const deleteQuestion = createAsyncThunk("questions/deleteQuestion", api.deleteQuestion)

const questionsSlice = createSlice({
  name: "questions",
  initialState: [] as Question[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addQuestion.fulfilled, (state, action) => {
        const addedQuestion = action.payload
        state.push(addedQuestion)
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        const deletedQuestionId = action.meta.arg
        return state.filter((question) => question.id !== deletedQuestionId)
      })
  },
})

export default questionsSlice.reducer
