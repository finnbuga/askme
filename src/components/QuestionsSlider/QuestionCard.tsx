import React from "react"
import { Card, Theme } from "@material-ui/core"
import { alpha } from "@material-ui/core/styles"

const sx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as "center",
  lineHeight: 1.5,
  minHeight: 200,
  padding: 4,
  backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.3),
}

// TODO loading state
const QuestionCard: React.FC = ({ children }) => (
  <Card sx={sx}>
    <h3>{children}</h3>
  </Card>
)

export default QuestionCard
