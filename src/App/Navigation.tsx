import { useState } from "react"
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Favorite, Person } from "@mui/icons-material"

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
