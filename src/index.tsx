import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { App } from "App"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import store from "store"

import "sentry-init"

const queryClient = new QueryClient()

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
