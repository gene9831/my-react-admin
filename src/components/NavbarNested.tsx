import { ScrollArea } from '@mantine/core'
import type { LinksGroupProps } from './LinksGroup'
import { LinksGroup } from './LinksGroup'
import * as classes from './NavbarNested.css'

export interface NavbarNestedProps {
  linksGroup: LinksGroupProps[]
}

export function NavbarNested(props: NavbarNestedProps) {
  const links = props.linksGroup.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ))

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.scrollArea}>{links}</ScrollArea>
    </nav>
  )
}
