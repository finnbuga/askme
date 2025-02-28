import { AppBar, Toolbar } from "@mui/material"

import { Logo } from "./Logo"
import { MainMenu } from "./MainMenu"
import { UserMenu } from "./UserMenu"

export const Header: React.FC = () => (
  <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
    <Toolbar sx={{ p: 3, pt: 4, pb: 2 }}>
      <MainMenu />
      <Logo />
      <UserMenu />
    </Toolbar>
  </AppBar>
)
