import type { PropsWithChildren } from 'react'
import * as classes from './Main.css'

export function Main(props: PropsWithChildren) {
  return <main className={classes.main}>{props.children}</main>
}
