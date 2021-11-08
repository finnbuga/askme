import React from "react"
import { AppBar, Toolbar } from "@mui/material"

import MainMenu from "./MainMenu"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

function Header() {
  return (
    <AppBar position="static" color="transparent" sx={wrapper}>
      <Toolbar sx={inner}>
        <MainMenu />

        <Logo />

        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

const wrapper = {
  boxShadow: "none",
} as const

const inner = {
  padding: 3,
  paddingTop: 4,
  paddingBottom: 2,
} as const

export default Header
