import React from "react"
import { useDispatch, useSelector } from "store"
import { navigate } from "@reach/router"
import { Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import AccountIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/ExitToApp"

import { signInWithGoogle, signOut } from "api/auth"
import { notifyError, notifySuccess } from "store/notificationsSlice"

function UserMenu() {
  const { user, isAuthenticating } = useSelector((state) => state.user)

  return isAuthenticating ? null : user ? <AuthMenu /> : <LoginButton />
}

const AuthMenu: React.FC = () => {
  const logout = useLogout()

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const isOpen = Boolean(anchorEl)
  const openMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={openMenu}>
        <AccountIcon />
      </IconButton>

      <Menu open={isOpen} onClose={closeMenu} onClick={closeMenu} anchorEl={anchorEl} keepMounted>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

const useLogout = () => {
  const dispatch = useDispatch()

  const logout = () =>
    signOut()
      .then(() => navigate("/"))
      .then(() => dispatch(notifySuccess("See you soon")))

  return logout
}

const LoginButton: React.FC = () => {
  const dispatch = useDispatch()

  const login = () =>
    signInWithGoogle()
      .then(() => dispatch(notifySuccess("Welcome")))
      .catch(() => dispatch(notifyError("Cannot login")))

  return (
    <Button color="inherit" onClick={login}>
      Login
    </Button>
  )
}

export default UserMenu
