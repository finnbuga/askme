import React from "react"
import { Box, Container } from "@mui/material"

import backgroundImage from "./bottom-background.png"

const PageWrapper: React.FC = ({ children }) => (
  <Box sx={wrapper}>
    <Container disableGutters sx={container}>
      {children}
    </Container>
    <Box component="footer" sx={footerStyle} />
  </Box>
)

const wrapper = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
} as const

const container = {
  maxWidth: {
    md: 1200,
  },
} as const

const footerStyle = {
  height: {
    sm: 200,
    md: 250,
  },
  background: {
    sm: `url(${backgroundImage}) no-repeat bottom`,
  },
} as const

export default PageWrapper
