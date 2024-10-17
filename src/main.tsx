import './index.css'

import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import 'dayjs/locale/zh-cn'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { providerFactory, Providers } from './components'
import { routeTree } from './routeTree.gen'
import { cssVariablesResolver, theme } from './theme'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const providers = [
  providerFactory(MantineProvider, { theme, cssVariablesResolver }),
  providerFactory(DatesProvider, { settings: { locale: 'zh-cn' } }),
  providerFactory(QueryClientProvider, { client: queryClient }),
]

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Providers providers={providers}>
        <RouterProvider router={router} />
      </Providers>
    </StrictMode>,
  )
}
