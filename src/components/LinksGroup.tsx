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
import clsx from 'clsx'

interface UnstyledButtonLinkProps
  extends UnstyledButtonProps,
    ElementProps<typeof Link, keyof UnstyledButtonProps> {}

function UnstyledButtonLink(props: UnstyledButtonLinkProps) {
  return <UnstyledButton component={Link} {...props}></UnstyledButton>
}

const activeClasses = clsx(
  'data-[active]:bg-primary-light-hover data-[active]:text-primary-800 data-[active]:dark:text-primary-100',
)

interface LinkItemProps {
  link: { label: string; link: string }
  active: boolean
}

function LinkItem({ link, active }: LinkItemProps) {
  return (
    <Text
      component={Link}
      className={clsx(
        'ml-xl block border-l px-md py-xs text-sm font-semibold hover:bg-hover data-[active]:border-primary',
        activeClasses,
      )}
      to={link.link}
      key={link.label}
      data-active={active || undefined}
    >
      {link.label}
    </Text>
  )
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
    typeof location === 'string' &&
    typeof link === 'string' &&
    trimEnd(location, '/') === trimEnd(link, '/')

  const ButtonOrLink = hasLinks ? UnstyledButton : UnstyledButtonLink

  return (
    <>
      <ButtonOrLink
        to={link}
        onClick={() => setOpened((o) => !o)}
        className={clsx(
          'block w-full px-md py-xs text-sm font-semibold hover:bg-hover',
          activeClasses,
        )}
        data-active={isActive(link) || undefined}
      >
        <Group justify="space-between" gap={0}>
          <Group>
            <ThemeIcon variant="light" size={30}>
              <Icon className="size-[18px]" />
            </ThemeIcon>
            <Box>{label}</Box>
          </Group>
          {hasLinks && (
            <IconChevronRight
              className="size-4 duration-200 ease-linear data-[opened]:-rotate-90"
              stroke={1.5}
              data-opened={opened ? '' : undefined}
            />
          )}
        </Group>
      </ButtonOrLink>
      {hasLinks ? (
        <Collapse in={opened}>
          {links.map((link) => (
            <LinkItem
              link={link}
              key={link.link}
              active={isActive(link.link)}
            ></LinkItem>
          ))}
        </Collapse>
      ) : null}
    </>
  )
}
