import React, { useState } from "react"
import { IconButton, Menu, MenuItem } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

function MainMenu() {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)
  const closeMenu = () => setAnchorEl(null)

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MenuIcon />
      </IconButton>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>My Questions</MenuItem>
        <MenuItem onClick={closeMenu}>My Favourites</MenuItem>
      </Menu>
    </>
  )
}

export default MainMenu
