import { Alert, Snackbar } from "@material-ui/core"
import useToggle from "hooks/useToggle"
import React, { useEffect } from "react"

import { useSelector } from "store"
import { useNotifications } from "store/useNotifications"

const Notifications: React.FC = () => {
  const notifications = useSelector((state) => state.notifications)
  const { showNext } = useNotifications()
  const [isOpen, open, close] = useToggle(true)

  useEffect(() => {
    !isOpen && open()
  }, [isOpen, open])

  if (!isOpen || notifications.length === 0) {
    return null
  }

  const { message, severity } = notifications[0]

  const handleClose = () => {
    close()
    showNext()
  }

  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={5000}
      onClose={(_, reason) => reason === "timeout" && handleClose()}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notifications