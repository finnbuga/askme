import { Favorite, Person } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction,Paper } from "@mui/material"
import { useState } from "react"

// @todo add bottom navigation
export const Navigation: React.FC = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={value} onChange={(_, newValue) => setValue(newValue)}>
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="My Questions" icon={<Person />} />
      </BottomNavigation>
    </Paper>
  )
}
