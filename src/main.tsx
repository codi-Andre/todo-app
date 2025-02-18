import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import "./styles/modern-normalize.css"
import "./styles/index.css"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"

import { NotFound } from "./components/not-found"
import { DefaultCatchBoundary } from "./components/default-catch-boundary"

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultErrorComponent: DefaultCatchBoundary,
  defaultNotFoundComponent: NotFound,
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
