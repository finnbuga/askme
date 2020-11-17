import React, { useState, useEffect } from "react"
import firebase from "firebase/app"
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import { signInWithGoogle, auth } from "../firebase"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}))

function Header() {
  const [user, setUser] = useState<firebase.User | null>(null)

  const classes = useStyles()

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Ask me!
          </Typography>

          {user ? (
            <>
              {user.displayName} -
              <Button color="inherit" onClick={() => auth.signOut()}>
                Log out
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={signInWithGoogle}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
