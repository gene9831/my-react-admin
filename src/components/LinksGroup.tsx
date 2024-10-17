import { trimEnd } from '@/utils'
import type { ElementProps, UnstyledButtonProps } from '@mantine/core'
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import type { MergeExclusive } from 'type-fest'
import * as classes from './LinksGroup.css'

interface UnstyledButtonLinkProps
  extends UnstyledButtonProps,
    ElementProps<typeof Link, keyof UnstyledButtonProps> {}

function UnstyledButtonLink(props: UnstyledButtonLinkProps) {
  return <UnstyledButton component={Link} {...props}></UnstyledButton>
}

export type LinksGroupProps = {
  icon: React.FC<Record<string, unknown>>
  label: string
  location?: string
} & MergeExclusive<
  { link?: string },
  {
    initiallyOpened?: boolean
    links?: { label: string; link: string }[]
  }
>

export function LinksGroup({
  icon: Icon,
  label,
  link,
  initiallyOpened,
  links,
  location,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const isActive = (link?: string) =>
    (typeof location === 'string' &&
      typeof link === 'string' &&
      trimEnd(location, '/') === trimEnd(link, '/')) ||
    undefined

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={Link}
      className={classes.link}
      to={link.link}
      key={link.label}
      data-active={isActive(link.link)}
    >
      {link.label}
    </Text>
  ))

  const ButtonOrLink = hasLinks ? UnstyledButton : UnstyledButtonLink

  return (
    <>
      <ButtonOrLink
        to={link}
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        data-active={isActive(link)}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon className={classes.icon} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </ButtonOrLink>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}
