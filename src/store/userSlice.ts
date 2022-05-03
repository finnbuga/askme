import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import * as api from "api/users"
import type { User } from "api/users"

export const likeQuestion = createAsyncThunk("user/likeQuestion", api.addLikedQuestion)

export const unlikeQuestion = createAsyncThunk("user/unlikeQuestion", api.removeLikedQuestion)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null as User | null,
    isAuthenticating: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticating = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(likeQuestion.fulfilled, (state, action) => {
        const questionId = action.meta.arg
        state.user!.likedQuestions.push(questionId)
      })
      .addCase(unlikeQuestion.fulfilled, (state, action) => {
        const unlikedQuestion = action.meta.arg
        state.user!.likedQuestions = state.user!.likedQuestions.filter(
          (question) => question !== unlikedQuestion
        )
      })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
