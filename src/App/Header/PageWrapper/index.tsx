import React from "react"
import { Box, Card, Container, Theme } from "@material-ui/core"

import backgroundImage from "./background.jpg"

const wrapperStyle = {
  minHeight: "100vh",
  background: (theme: Theme) => ({
    xs: theme.palette.grey[200],
    sm: `url(${backgroundImage}) 0% 0% / cover`,
  }),
}

const PageWrapper: React.FC = ({ children }) => (
  <Box sx={wrapperStyle}>
    <Container component={Card} maxWidth="sm" disableGutters>
      {children}
    </Container>
  </Box>
)

export default PageWrapper
