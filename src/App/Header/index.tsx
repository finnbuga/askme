import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"

import MainMenu from "./MainMenu"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <MainMenu />

        <Logo />

        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
