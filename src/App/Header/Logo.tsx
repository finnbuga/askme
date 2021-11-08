import React from "react"
import { Link } from "@reach/router"
import { Typography } from "@mui/material"

const style = {
  expand: {
    flexGrow: 1,
  },
  logo: {
    color: "inherit",
    textDecoration: "none",
  },
}

function Logo() {
  return (
    <Typography variant="h6" style={style.expand}>
      <Link to="/" style={style.logo}>
        {/* <img width={30} src={logo} alt="Logo" />  */}
        {/* Ask me! */}
      </Link>
    </Typography>
  )
}

export default Logo
