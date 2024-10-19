import type { PropsWithChildren } from 'react'

export function Main(props: PropsWithChildren) {
  return <main className="pt-[var(--toolbar-height)]">{props.children}</main>
}
