import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import User from "api/interfaces/User"
import * as api from "api/users"

const likeQuestion = createAsyncThunk("user/likeQuestion", api.addLikedQuestion)

const unlikeQuestion = createAsyncThunk("user/unlikeQuestion", api.removeLikedQuestion)

const userSlice = createSlice({
  name: "user",

  initialState: {
    isAuthenticating: true,
    user: null as User | null,
  },

  reducers: {
    setUser: (_, action) => ({ isAuthenticating: false, user: action.payload }),
  },

  extraReducers: (builder) => {
    builder.addCase(likeQuestion.fulfilled, (state, action) => {
      const questionId = action.meta.arg
      state.user!.likedQuestions.push(questionId)
    })

    builder.addCase(unlikeQuestion.fulfilled, (state, action) => {
      const unlikedQuestion = action.meta.arg
      state.user!.likedQuestions = state.user!.likedQuestions.filter(
        (question) => question !== unlikedQuestion
      )
    })
  },
})

export const userActions = { ...userSlice.actions, likeQuestion, unlikeQuestion }

export default userSlice.reducer
