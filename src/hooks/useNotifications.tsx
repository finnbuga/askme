import { useSnackbar } from "notistack"

export const useNotifications = () => {
  const { enqueueSnackbar } = useSnackbar()

  const notifyError = (message: string) => enqueueSnackbar(message, { variant: "error" })
  const notifySuccess = (message: string) => enqueueSnackbar(message, { variant: "success" })

  return { notifyError, notifySuccess }
}
