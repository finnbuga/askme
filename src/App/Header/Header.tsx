import { AppBar, Toolbar } from "@mui/material"

import MainMenu from "./MainMenu"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

function Header() {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ p: 3, pt: 4, pb: 2 }}>
        <MainMenu />
        <Logo />
        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
