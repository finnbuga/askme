import { Story, Meta } from "@storybook/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

import { QuestionsSlider } from "components/QuestionsSlider"

const store = configureStore({
  reducer: {
    questions: () => [
      { id: "22", text: "What would you do if you had all the money in the world?" },
      { id: "24", text: "Who would you like to have for dinner?" },
    ],
    user: () => ({ user: null, isAuthenticating: false }),
  },
})

// @TODO Log actions
// Use https://github.com/frodare/addon-redux
// Or do it manually:

// import { action } from "@storybook/addon-actions"
// const originalDispatch = store.dispatch.bind(store)
// store.dispatch = (arg: any) => {
//   action("dispatch")
//   return originalDispatch(arg)
// }

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
