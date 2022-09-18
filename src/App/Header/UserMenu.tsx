import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import AccountIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/ExitToApp"

import { signInWithGoogle, signOut } from "api/auth"
import { useSelector } from "store"
import { useNotifications } from "hooks/useNotifications"

function UserMenu() {
  const { user, isAuthenticating } = useSelector((state) => state.user)

  return (
    // Set a fixed width do avoid the header resizing on auth user response
    // Set it to 40 in order to match the width of the menu icon on the left. This will help center the logo.
    <div style={{ width: 40, display: "flex", flexDirection: "row-reverse" }}>
      {isAuthenticating ? null : user ? <AuthMenu /> : <LoginButton />}
    </div>
  )
}

const AuthMenu: React.FC = () => {
  const logout = useLogout()

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const isOpen = Boolean(anchorEl)
  const openMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  return (
    <>
      <IconButton color="inherit" onClick={openMenu}>
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
  const { notifySuccess } = useNotifications()
  const navigate = useNavigate()

  const logout = () =>
    signOut()
      .then(() => navigate("/"))
      .then(() => notifySuccess("See you soon"))

  return logout
}

const LoginButton: React.FC = () => {
  const { notifyError, notifySuccess } = useNotifications()

  const login = () =>
    signInWithGoogle()
      .then(() => notifySuccess("Welcome"))
      .catch(() => notifyError("Cannot login"))

  return (
    <Button color="inherit" onClick={login}>
      Login
    </Button>
  )
}

export default UserMenu
