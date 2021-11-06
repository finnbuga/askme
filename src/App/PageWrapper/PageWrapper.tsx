import React from "react"
import { Box, Container, Theme } from "@material-ui/core"

import backgroundImage from "./bottom-background.png"

const wrapperStyle = {
  minHeight: "100vh",
  background: (theme: Theme) => ({
    xs: theme.palette.grey[200],
    sm: `url(${backgroundImage}) no-repeat bottom`,
  }),
} as const

const PageWrapper: React.FC = ({ children }) => (
  <Box sx={wrapperStyle}>
    <Container maxWidth="sm" disableGutters>
      {children}
    </Container>
  </Box>
)

export default PageWrapper
