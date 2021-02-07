import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/questions"
import Question from "api/interfaces/Question"
import { dispatch } from "store"

const addQuestion = createAsyncThunk("questions/addQuestion", api.addQuestion)
const dispatchAddQuestion = (question: Omit<Question, "id">) => dispatch(addQuestion(question))
export { dispatchAddQuestion as addQuestion }

const getQuestions = createAsyncThunk("questions/getQuestions", api.getQuestions)
const dispatchGetQuestion = () => dispatch(getQuestions())
export { dispatchGetQuestion as getQuestions }

const deleteQuestion = createAsyncThunk("questions/deleteQuestion", api.deleteQuestion)
const dispatchDeleteQuestion = (id: Question["id"]) => dispatch(deleteQuestion(id))
export { dispatchDeleteQuestion as deleteQuestion }

const questionsSlice = createSlice({
  name: "questions",

  initialState: [] as Question[],

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (_, action) => {
      const fetchedQuestions = action.payload
      return fetchedQuestions
    })

    builder.addCase(deleteQuestion.fulfilled, (state, action) => {
      const deletedQuestionId = action.meta.arg
      return state.filter((question) => question.id !== deletedQuestionId)
    })

    builder.addCase(addQuestion.fulfilled, (state, action) => {
      const newlyAddedQuestion = action.payload
      return [...state, newlyAddedQuestion]
    })
  },
})

export default questionsSlice.reducer
