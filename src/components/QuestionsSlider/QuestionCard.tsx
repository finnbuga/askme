import React from "react"
import { Card, CardContent } from "@material-ui/core"

const styles = {
  bigText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as "center",
    lineHeight: 1.5,
    minHeight: 200,
    background: "#f3f3f3",
  },
}

const QuestionCard: React.FC<{ isLoading?: boolean }> = ({ isLoading, children }) => (
  <Card style={styles.bigText}>
    <CardContent>
      <h3>{isLoading ? "Loading..." : children}</h3>
    </CardContent>
  </Card>
)

export default QuestionCard
