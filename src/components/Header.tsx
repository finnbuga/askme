import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

import MainMenu from "./MainMenu"
import UserMenu from "./UserMenu"

const style = {
  expand: {
    flexGrow: 1,
  },
}

function Header() {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <MainMenu />

          <Typography variant="h6" style={style.expand}>
            Ask me!
          </Typography>

          <UserMenu />
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
