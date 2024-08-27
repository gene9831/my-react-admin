import * as classes from './Main.css'

interface Props {
  children?: React.ReactNode
}

export function Main(props: Props) {
  return <main className={classes.main}>{props.children}</main>
}
