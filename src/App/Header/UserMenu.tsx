import React from "react"
import { useSelector } from "store"
import { navigate } from "@reach/router"
import { Button } from "@material-ui/core"

import { signInWithGoogle, signOut } from "api/auth"

function UserMenu() {
  const { user, isAuthenticating } = useSelector((state) => state.auth)
  const isLoggedIn = Boolean(user)

  return isAuthenticating ? null : isLoggedIn ? (
    <>
      {user!.name} -
      <Button color="inherit" onClick={() => navigate("/").then(signOut)}>
        Log out
      </Button>
    </>
  ) : (
    <Button color="inherit" onClick={signInWithGoogle}>
      Login
    </Button>
  )
}

export default UserMenu
