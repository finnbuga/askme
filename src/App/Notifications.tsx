import { Alert, Snackbar } from "@mui/material"
import useToggle from "hooks/useToggle"
import React, { useEffect } from "react"

import { useSelector, useDispatch } from "store"
import { showNext } from "store/notificationsSlice"

const Notifications: React.FC = () => {
  const notifications = useSelector((state) => state.notifications)
  const dispatch = useDispatch()
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
    dispatch(showNext())
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
