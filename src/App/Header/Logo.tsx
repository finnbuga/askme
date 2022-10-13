import { Link } from "react-router-dom"

import logo from "./logo.png"

export const Logo: React.FC = () => (
  <Link to="/" style={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}>
    <img width={30} src={logo} alt="Logo" style={{ display: "block", margin: "0 auto" }} />
  </Link>
)
