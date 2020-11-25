import React from "react"
import { Button } from "@material-ui/core"

import useUser from "./useUser"

function UserMenu() {
  const { user, signIn, signOut } = useUser()

  return user ? (
    <>
      {user.name} -
      <Button color="inherit" onClick={signOut}>
        Log out
      </Button>
    </>
  ) : (
    <Button color="inherit" onClick={signIn}>
      Login
    </Button>
  )
}

export default UserMenu
