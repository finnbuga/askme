import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import Question from "api/interfaces/Question"
import { dispatch } from "store"

const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)
const dispatchGetQuestion = () => dispatch(getQuestions())
export { dispatchGetQuestion as getQuestions }

const deleteQuestion = createAsyncThunk("questions/deleteQuestion", api.deleteQuestion)
const dispatchDeleteQuestion = (id: Question["id"]) => dispatch(deleteQuestion(id))
export { dispatchDeleteQuestion as deleteQuestion }

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

    builder.addCase(deleteQuestion.fulfilled, (state, action) => ({
      isLoading: false,
      error: null,
      questions: state.questions?.filter((question) => question.id !== action.meta.arg[0]) || null,
    }))
    builder.addCase(deleteQuestion.rejected, (state, action) => ({
      isLoading: false,
      error: action.error.message || "Failed fetching documents",
      questions: state.questions,
    }))
  },
})

export default userSlice.reducer
