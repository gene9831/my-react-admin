import { Anchor, Burger, Container, Group, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ColorSchemaIcon } from './ColorSchemaIcon.tsx'
import * as classes from './Header.css.ts'
import { Logo } from './Logo.tsx'

export interface HeaderProps {
  links: {
    link: string
    label: string
  }[]
}

export function Header({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map((link) => (
    <Anchor
      component={Link}
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link)
      }}
    >
      {link.label}
    </Anchor>
  ))

  return (
    <header className={classes.header}>
      <Container fluid className={classes.container}>
        <Group>
          <Logo style={{ width: rem(120) }} />
        </Group>
        <Group gap={8} visibleFrom="xs">
          {items}
          <ColorSchemaIcon />
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}
