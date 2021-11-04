import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "@material-ui/core"

export default {
  title: "Button",
  component: Button,
} as Meta

export const ButtonTypes: Story<ButtonProps> = ({ color, onClick }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 200, margin: "auto" }}>
    <Button color="secondary" onClick={onClick}>
      Secondary
    </Button>
    <Button color={color} onClick={onClick}>
      Primary
    </Button>
    <Button color={color} variant="outlined" onClick={onClick}>
      Outlined
    </Button>
    <Button color={color} variant="contained" onClick={onClick}>
      Contained
    </Button>
    <Button color={color} variant="contained" size="small" onClick={onClick}>
      Small
    </Button>
  </div>
)
ButtonTypes.args = {
  color: "primary",
}
