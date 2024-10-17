import type { PropsWithChildren, ReactNode } from 'react'
import type { providerFactory } from './providerFactory'

function applyProviders(
  providers: ReturnType<typeof providerFactory>[],
  children?: ReactNode,
): ReactNode {
  if (providers.length === 0) {
    return children
  }
  const { Component, props } = providers[0]
  return (
    <Component {...props}>
      {applyProviders(providers.slice(1), children)}
    </Component>
  )
}

export interface ProvidersProps extends PropsWithChildren {
  providers: ReturnType<typeof providerFactory>[]
}

export function Providers(props: ProvidersProps) {
  const { providers, children } = props
  return applyProviders(providers, children)
}
