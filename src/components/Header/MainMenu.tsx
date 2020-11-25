import React, { useRef } from "react"
import { Link } from "@reach/router"
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FolderIcon from "@material-ui/icons/Folder"

import useToggle from "./useToggle"

function MainMenu() {
  const menuButtonRef = useRef(null)
  const [isOpen, openMenu, closeMenu] = useToggle(false)

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={openMenu} ref={menuButtonRef}>
        <MenuIcon />
      </IconButton>

      <Menu open={isOpen} onClose={closeMenu} anchorEl={menuButtonRef.current} keepMounted>
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText>
            <Link to="/my-questions">My Questions</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="My Favourites" />
        </MenuItem>
      </Menu>
    </>
  )
}

export default MainMenu
