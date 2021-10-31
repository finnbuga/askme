import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as api from "api/questions"

import { Question } from "api/questions"

const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)

const addQuestion = createAsyncThunk("questions/addQuestion", api.addQuestion)

const deleteQuestion = createAsyncThunk("questions/deleteQuestion", api.deleteQuestion)

const questionsSlice = createSlice({
  name: "questions",
  initialState: [] as Question[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.fulfilled, (state, action) => {
        const fetchedQuestions = action.payload
        return fetchedQuestions
      })
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

export const questionsActions = { getQuestions, addQuestion, deleteQuestion }

export default questionsSlice.reducer
