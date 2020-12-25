import React, { useRef } from "react"
import { navigate } from "@reach/router"
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FolderIcon from "@material-ui/icons/Folder"
import HelpIcon from "@material-ui/icons/Help"

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
        <MenuItem onClick={() => navigate("/how-to-play").then(closeMenu)}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>How to Play</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/my-questions").then(closeMenu)}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText>My Questions</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate("/my-favourites").then(closeMenu)}>
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
