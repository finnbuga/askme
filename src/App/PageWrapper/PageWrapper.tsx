import type { SxProps } from "@mui/material"
import { Box, Container } from "@mui/material"
import type { ReactNode } from "react"

import { Header } from "../Header/Header"

import backgroundImage from "./bottom-background.png"

export const PageWrapper: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <Box sx={wrapper}>
    <Container disableGutters sx={container}>
      <Header />
      <Box component="main" sx={main}>
        {children}
      </Box>
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

const main: SxProps = {
  px: 4,
}

const footerStyle: SxProps = {
  height: {
    xs: 24,
    sm: 200,
    md: 250,
  },
  background: {
    sm: `url(${backgroundImage}) center top no-repeat`,
  },
  backgroundSize: {
    sm: "cover",
  },
}
