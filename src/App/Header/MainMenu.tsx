import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import FavoriteIcon from "@mui/icons-material/Favorite"
import useToggle from "hooks/useToggle"

function MainMenu() {
  const navigate = useNavigate()
  const menuButtonRef = useRef(null)
  const [isOpen, openMenu, closeMenu] = useToggle(false)

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={openMenu} ref={menuButtonRef}>
        <MenuIcon />
      </IconButton>

      <Menu open={isOpen} onClose={closeMenu} anchorEl={menuButtonRef.current} onClick={closeMenu}>
        <MenuItem onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => navigate("/my-questions")}>
          <ListItemIcon>
            <LightbulbIcon />
          </ListItemIcon>
          <ListItemText>My Questions</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => navigate("/my-favourites")}>
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
