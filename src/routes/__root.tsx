import { Box, useMantineTheme } from '@mantine/core'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router'
import React, { Suspense } from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
    notFoundComponent: () => (
      <div>
        <p>NotFound</p>
        <Link to="/">Go to Home</Link>
      </div>
    ),
  },
)

function RootComponent() {
  const theme = useMantineTheme()

  return (
    <>
      <Box
        p={theme.spacing.xs}
        display="flex"
        style={{ gap: theme.spacing.xs }}
      >
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/posts" className="[&.active]:font-bold">
          Posts
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </Box>
      <hr />
      <Outlet />
      <ReactQueryDevtools />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
