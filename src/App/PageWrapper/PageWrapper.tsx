import { Box, Container } from "@mui/material"
import type { SxProps } from "@mui/material"

import Notifications from "../Notifications"
import Header from "../Header/Header"

import backgroundImage from "./bottom-background.png"

const PageWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Box sx={wrapper}>
    <Container disableGutters sx={container}>
      <Notifications />
      <Header />
      <Box component="main" sx={{ p: 3, pt: 0 }}>
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
