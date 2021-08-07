import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "@material-ui/core"

export default {
  title: "AskMe/Button",
  component: Button,
  argTypes: {
    // color: { control: "color" },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Button",
  color: "primary",
}

export const Contained = Template.bind({})
Contained.args = {
  ...Default.args,
  variant: "contained",
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...Default.args,
  variant: "outlined",
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  variant: "contained",
  // TODO check how to show this like radio buttons rather than text input
  size: "small",
}
