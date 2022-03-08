import React from "react"
import { Box, Container } from "@mui/material"
import type { SxProps } from "@mui/material"

import backgroundImage from "./bottom-background.png"

const PageWrapper: React.FC = ({ children }) => (
  <Box sx={wrapper}>
    <Container disableGutters sx={container}>
      {children}
    </Container>
    <Box component="footer" sx={footerStyle} />
  </Box>
)

const wrapper: SxProps = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

const container: SxProps = {
  maxWidth: {
    md: 1200,
  },
}

const footerStyle: SxProps = {
  height: {
    sm: 200,
    md: 250,
  },
  background: {
    sm: `url(${backgroundImage}) no-repeat bottom`,
  },
}

export default PageWrapper
