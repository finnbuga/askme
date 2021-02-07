import React from "react"
import { Story, Meta } from "@storybook/react"

import QuestionsTable, { QuestionsTableProps } from "../components/QuestionsTable"

export default {
  component: QuestionsTable,
  title: "AskMe/QuestionsTable",
  // argTypes: { onDelete: { action: "onDelete" } },
  // parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta

const Template: Story<QuestionsTableProps> = (args) => <QuestionsTable {...args} />

export const Default = Template.bind({})
Default.args = {
  questions: [
    { id: "1", text: "Is this the first question?" },
    { id: "2", text: "Is this the econd question?" },
  ],
  isLoading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
