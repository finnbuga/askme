import React from "react"
import { Story, Meta } from "@storybook/react"

import QuestionsTable, { QuestionsTableProps } from "../components/QuestionsTable"

export default {
  component: QuestionsTable,
  title: "AskMe/QuestionsTable",
  // We're already handling actions in preview.js:
  // argTypes: { onDelete: { action: "onDelete" } },
  // parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: {
    onDelete: {
      table: { disable: true }, // Remove prop from the UI
      // table: { control: false }, // Display prop documentation
    },
  },
} as Meta

const Template: Story<QuestionsTableProps> = (args) => <QuestionsTable {...args} />

export const Default = Template.bind({})
Default.args = {
  questions: [
    { id: "1", text: "Is this the first question?" },
    { id: "2", text: "Is this the second question?" },
  ],
  isLoading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
