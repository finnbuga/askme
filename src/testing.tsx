import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider as ReduxProvider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import type { ReactElement } from "react"
import type { RenderOptions } from "@testing-library/react"

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

export * from "@testing-library/react"
export { customRender as render }
