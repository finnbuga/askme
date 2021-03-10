import React from "react"
import { Story, Meta } from "@storybook/react"

import QuestionsTable, { QuestionsTableProps } from "../components/QuestionsTable"

export default {
  title: "AskMe/QuestionsTable",
  component: QuestionsTable,
} as Meta

const Template: Story<QuestionsTableProps> = (args) => <QuestionsTable {...args} />

export const WithQuestions = Template.bind({})
WithQuestions.args = {
  questions: [
    { id: "1", text: "First question?" },
    { id: "2", text: "Second question?" },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  questions: [],
  isLoading: true,
}
