import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import User from "api/interfaces/User"
import Question from "api/interfaces/Question"
import * as api from "api/users"
import { dispatch, RootState } from "store"

const addLikedQuestion = createAsyncThunk<Promise<any>, Question["id"], { state: RootState }>(
  "questions/addLikedQuestion",
  async (questionId: string, { getState }) => api.addLikedQuestion(getState().user!.id, questionId)
)

const dispatchAddLikedQuestion = (id: Question["id"]) => dispatch(addLikedQuestion(id))
export { dispatchAddLikedQuestion as addLikedQuestion }

const removeLikedQuestion = createAsyncThunk<Promise<any>, Question["id"], { state: RootState }>(
  "questions/removeLikedQuestion",
  async (questionId: string, { getState }) =>
    api.removeLikedQuestion(getState().user!.id, questionId)
)
const dispatchRemoveLikedQuestion = (id: Question["id"]) => dispatch(removeLikedQuestion(id))
export { dispatchRemoveLikedQuestion as removeLikedQuestion }

const userSlice = createSlice({
  name: "user",

  initialState: null as User | null,

  reducers: {
    setUser: (_, action) => action.payload,
  },

  extraReducers: (builder) => {
    builder.addCase(addLikedQuestion.fulfilled, (state, action) => {
      const questionId = action.meta.arg
      if (!state!.likedQuestions) {
        state!.likedQuestions = []
      }
      state!.likedQuestions.push(questionId)
    })

    builder.addCase(removeLikedQuestion.fulfilled, (state, action) => {
      const removedQuestionId = action.meta.arg
      state!.likedQuestions = state!.likedQuestions!.filter(
        (question) => question !== removedQuestionId
      )
    })
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
