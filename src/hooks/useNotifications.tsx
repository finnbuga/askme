import { useSnackbar } from "notistack"

export const useNotifications = () => {
  const { enqueueSnackbar } = useSnackbar()

  const notifySuccess = (message: string) => {
    enqueueSnackbar(message, { variant: "success" })
  }
  const notifyError = (error: string | Error) => {
    const message = typeof error === "string" ? error : error.message
    enqueueSnackbar(message, { variant: "error" })
  }

  return { notifyError, notifySuccess }
}
