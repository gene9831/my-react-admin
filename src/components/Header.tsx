import { Anchor, Container, Group } from '@mantine/core'
import { Link, useLocation } from '@tanstack/react-router'
import { useMemo } from 'react'
import { ColorSchemaIcon } from './ColorSchemaIcon.tsx'
import { Logo } from './Logo.tsx'

export interface HeaderProps {
  links: { link: string; label: string }[]
}

export function Header({ links }: HeaderProps) {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })

  const active = useMemo(() => {
    const paths = pathname.split('/').filter((item) => Boolean(item))
    return `/${paths[0]}`
  }, [pathname])

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      component={Link}
      className="flex h-9 items-center rounded-sm px-[18px] text-sm font-semibold text-body no-underline hover:bg-hover data-[active]:bg-primary data-[active]:text-white"
      to={link.link}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </Anchor>
  ))

  return (
    <header className="fixed top-0 z-app h-toolbar w-full border-b bg-default">
      <Container fluid className="flex h-full items-center justify-between">
        <Group>
          <Logo className="w-[120px]" />
        </Group>
        <Group gap={8} visibleFrom="xs">
          {items}
          <ColorSchemaIcon />
        </Group>
      </Container>
    </header>
  )
}
