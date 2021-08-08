import { Alert, Snackbar } from "@material-ui/core"
import * as React from "react"

import { useSelector } from "store"
import { useNotifications } from "store/useNotifications"

export const Notifications: React.FC = () => {
  const notifications = useSelector((state) => state.notifications)
  const { showNext } = useNotifications()

  if (notifications.length === 0) {
    return null
  }

  const { message, severity } = notifications[0]

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open
      autoHideDuration={6000}
      onClose={(_, reason) => {
        console.log("async closing", reason)
        reason === "timeout" && showNext()
      }}
    >
      <Alert onClose={showNext} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}
