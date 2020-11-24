import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

import useUser from "./useUser"

const style = {
  expand: {
    flexGrow: 1,
  },
}

function Header() {
  const { user, signIn, signOut } = useUser()

  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" style={style.expand}>
            Ask me!
          </Typography>

          {user ? (
            <>
              {user.name} -
              <Button color="inherit" onClick={signOut}>
                Log out
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={signIn}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
