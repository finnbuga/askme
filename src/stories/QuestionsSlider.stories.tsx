import React from "react"
import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import QuestionsSlider from "components/QuestionsSlider"

const store = configureStore({
  reducer: {
    questions: () => [
      { id: "22", text: "What would you do if you had all the money in the world?" },
    ],
    user: () => ({ user: null, isAuthenticating: false }),
  },
})

// @TODO Log actions

// Either manually:
// import { action } from "@storybook/addon-actions"
// const originalDispatch = store.dispatch.bind(store)
// store.dispatch = (arg: any) => {
//   action("dispatch")
//   return originalDispatch(arg)
// }
//
// Or use https://github.com/frodare/addon-redux

export default {
  title: "QuestionsSlider",
  component: QuestionsSlider,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: Story = () => <QuestionsSlider />