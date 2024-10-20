import { ScrollArea } from '@mantine/core'
import { useLocation } from '@tanstack/react-router'
import type { LinksGroupProps } from './LinksGroup'
import { LinksGroup } from './LinksGroup'

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
    <nav className="fixed bottom-0 left-0 top-toolbar flex w-sidebar flex-col border-r bg-default">
      <ScrollArea className="flex-1" classNames={{ viewport: 'py-md' }}>
        {links}
      </ScrollArea>
    </nav>
  )
}
