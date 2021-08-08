import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { questionsActions } from "./questionsSlice"

const useQuestionsActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(questionsActions, dispatch)
}

export default useQuestionsActions
