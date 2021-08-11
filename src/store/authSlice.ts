import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import User from "api/interfaces/User"
import Question from "api/interfaces/Question"
import * as api from "api/users"
import { RootState } from "store"

const addLikedQuestion = createAsyncThunk<Promise<any>, Question["id"], { state: RootState }>(
  "questions/addLikedQuestion",
  (questionId: string, { getState }) => api.addLikedQuestion(getState().auth.user!.id, questionId)
)

const removeLikedQuestion = createAsyncThunk<Promise<any>, Question["id"], { state: RootState }>(
  "questions/removeLikedQuestion",
  (questionId: string, { getState }) =>
    api.removeLikedQuestion(getState().auth.user!.id, questionId)
)

const authSlice = createSlice({
  name: "user",

  initialState: {
    isAuthenticating: true,
    user: null as User | null,
  },

  reducers: {
    setUser: (_, action) => ({
      isAuthenticating: false,
      user: action.payload,
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(addLikedQuestion.fulfilled, (state, action) => {
      const questionId = action.meta.arg
      if (!state.user!.likedQuestions) {
        state.user!.likedQuestions = []
      }
      state.user!.likedQuestions.push(questionId)
    })

    builder.addCase(removeLikedQuestion.fulfilled, (state, action) => {
      const removedQuestionId = action.meta.arg
      state.user!.likedQuestions = state.user!.likedQuestions!.filter(
        (question) => question !== removedQuestionId
      )
    })
  },
})

export const userActions = { ...authSlice.actions, addLikedQuestion, removeLikedQuestion }

export default authSlice.reducer
