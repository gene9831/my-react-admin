import type { ComponentProps, JSXElementConstructor } from 'react'

export function providerFactory<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(Component: T, props: ComponentProps<T>) {
  return { Component, props }
}
