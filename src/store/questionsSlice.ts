import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import Question from "api/interfaces/Question"

const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)

const addQuestion = createAsyncThunk("questions/addQuestion", api.addQuestion)

const deleteQuestion = createAsyncThunk("questions/deleteQuestion", api.deleteQuestion)

const questionsSlice = createSlice({
  name: "questions",

  initialState: [] as Question[],

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (_, action) => {
      const fetchedQuestions = action.payload
      return fetchedQuestions
    })

    builder.addCase(addQuestion.fulfilled, (state, action) => {
      const newlyAddedQuestion = action.payload
      return [...state, newlyAddedQuestion]
    })

    builder.addCase(deleteQuestion.fulfilled, (state, action) => {
      const deletedQuestionId = action.meta.arg
      return state.filter((question) => question.id !== deletedQuestionId)
    })
  },
})

export const questionsActions = { getQuestions, addQuestion, deleteQuestion }

export default questionsSlice.reducer
