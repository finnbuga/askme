import React, { useRef } from "react"
import { IconButton, Menu, MenuItem } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

import useToggle from "./useToggle"

function MainMenu() {
  const menuButtonRef = useRef(null)
  const [isOpen, openMenu, closeMenu] = useToggle(false)

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={openMenu}
        ref={menuButtonRef}
      >
        <MenuIcon />
      </IconButton>

      <Menu open={isOpen} anchorEl={menuButtonRef.current} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>My Questions</MenuItem>
        <MenuItem onClick={closeMenu}>My Favourites</MenuItem>
      </Menu>
    </>
  )
}

export default MainMenu
