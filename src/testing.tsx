/* eslint-disable react-refresh/only-export-components */

import { configureStore } from "@reduxjs/toolkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"
import type { ReactElement } from "react"
import { Provider as ReduxProvider } from "react-redux"

const queryClient = new QueryClient()

const store = configureStore({
  reducer: {
    user: () => ({ user: null, isAuthenticating: false }),
  },
})

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ReduxProvider>
)

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: Provider, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
