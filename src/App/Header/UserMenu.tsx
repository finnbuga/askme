import React, { useRef } from "react"
import { useSelector } from "store"
import { navigate } from "@reach/router"
import { Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import AccountCircle from "@mui/icons-material/AccountCircle"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

import { signInWithGoogle, signOut } from "api/auth"
import useToggle from "hooks/useToggle"

function UserMenu() {
  const { user, isAuthenticating } = useSelector((state) => state.user)
  const menuButtonRef = useRef(null)
  const [isOpen, openMenu, closeMenu] = useToggle(false)

  if (isAuthenticating) {
    return null
  }

  if (!user) {
    return (
      <Button color="inherit" onClick={signInWithGoogle}>
        Login
      </Button>
    )
  }

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={openMenu} ref={menuButtonRef}>
        <AccountCircle />
      </IconButton>

      <Menu open={isOpen} onClose={closeMenu} anchorEl={menuButtonRef.current} keepMounted>
        <MenuItem onClick={() => navigate("/").then(signOut)}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu
