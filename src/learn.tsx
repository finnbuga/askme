// useReducer(reducer, initialState) with TS
// TS Discriminating Unions
// status: "idle" | "pending" | "error" | "success"
// custom hook with {isLoadin, isRejected, isResolved}
// navigator.geolocation

import { useReducer, useEffect } from "react"

interface State {
  status: "idle" | "pending" | "error" | "success"
  error?: Error
  geoLocation?: GeolocationPosition
}

type Action =
  | { type: "pending" }
  | { type: "success"; payload: State["geoLocation"] }
  | { type: "error"; payload: State["error"] }

const geoLocationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "pending":
      return { ...state, status: "pending" }
    case "error":
      return { ...state, status: "error", error: action.payload }
    case "success":
      return { ...state, status: "success", geoLocation: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const useGeolocation = () => {
  const [state, dispatch] = useReducer(geoLocationReducer, { status: "idle" })

  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({ type: "error", payload: new Error("Geolocation is not supported") })
    }

    dispatch({ type: "pending" })

    const geoWatch = navigator.geolocation.watchPosition(
      (geoLocation) => dispatch({ type: "success", payload: geoLocation }),
      (error) => dispatch({ type: "error", payload: new Error(error.message) })
    )

    return () => {
      navigator.geolocation.clearWatch(geoWatch)
    }
  }, [])

  return {
    ...state,
    isLoading: state.status === "idle" || state.status === "pending",
    isRejected: state.status === "error",
    isResolved: state.status === "success",
  }
}

export { useGeolocation }
