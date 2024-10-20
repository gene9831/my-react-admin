import type { PropsWithChildren } from 'react'

export function Main(props: PropsWithChildren) {
  return <main className="pt-toolbar">{props.children}</main>
}
