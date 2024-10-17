import { Header, Main } from '@/components'
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
        <Link to="/home">Go to Home</Link>
      </div>
    ),
  },
)

const links = [
  { link: '/home', label: 'Home' },
  { link: '/posts', label: 'Posts' },
  { link: '/about', label: 'About' },
]

function RootComponent() {
  return (
    <>
      <Header links={links} />
      <Main>
        <Outlet />
      </Main>
      <ReactQueryDevtools />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
