interface Props {
  children?: React.ReactNode
}

export function Main(props: Props) {
  return <main>{props.children}</main>
}
