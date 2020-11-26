import React from "react"
import { Card, CardContent } from "@material-ui/core"

const styles = {
  bigText: {
    flexGrow: 1,
    textAlign: "center" as "center",
    lineHeight: "3rem",
    minHeight: 250,
  },
}

const BigTextCard: React.FC<{ isLoading?: boolean }> = ({ isLoading, children }) => (
  <Card style={styles.bigText}>
    <CardContent>
      <h1>{isLoading ? "Loading..." : children}</h1>
    </CardContent>
  </Card>
)

export default BigTextCard
