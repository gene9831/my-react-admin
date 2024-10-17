import { Anchor, Container, Group, rem } from '@mantine/core'
import { Link, useLocation } from '@tanstack/react-router'
import { useMemo } from 'react'
import { ColorSchemaIcon } from './ColorSchemaIcon.tsx'
import * as classes from './Header.css'
import { Logo } from './Logo.tsx'

export interface HeaderProps {
  links: {
    link: string
    label: string
  }[]
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
      component={Link}
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </Anchor>
  ))

  const matched = links.some((link) => link.link === active)

  return (
    <header className={classes.header}>
      <Container fluid className={classes.container}>
        <Group>
          <Logo style={{ width: rem(120) }} />
        </Group>
        <Group gap={8} visibleFrom="xs">
          {matched ? items : null}
          <ColorSchemaIcon />
        </Group>
      </Container>
    </header>
  )
}
