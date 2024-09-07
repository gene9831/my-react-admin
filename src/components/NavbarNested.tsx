import { ScrollArea } from '@mantine/core'
import { useLocation } from '@tanstack/react-router'
import type { LinksGroupProps } from './LinksGroup'
import { LinksGroup } from './LinksGroup'
import * as classes from './NavbarNested.css'

export interface NavbarNestedProps {
  linksGroup: LinksGroupProps[]
}

export function NavbarNested(props: NavbarNestedProps) {
  const location = useLocation({
    select: (state) => state.pathname,
  })

  const links = props.linksGroup.map((item, index) => (
    <LinksGroup {...item} location={location} key={index} />
  ))

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.scrollArea}>{links}</ScrollArea>
    </nav>
  )
}
