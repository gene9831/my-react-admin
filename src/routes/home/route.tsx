import { NavbarNested, type LinksGroupProps } from '@/components'
import { Box, Container } from '@mantine/core'
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react'
import { createFileRoute, Outlet, useMatch } from '@tanstack/react-router'
import * as classes from './route.css'

export const Route = createFileRoute('/home')({
  component: Layout,
  notFoundComponent: () => <Box>Custom NotFound</Box>,
})

const linksGroup: LinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: 'dashboard' },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '' },
      { label: 'Forecasts', link: '' },
      { label: 'Outlook', link: '' },
      { label: 'Real time', link: '' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '' },
      { label: 'Previous releases', link: '' },
      { label: 'Releases schedule', link: '' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments, link: 'settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '' },
      { label: 'Change password', link: '' },
      { label: 'Recovery codes', link: '' },
    ],
  },
]

const processLinksGroup = (basePath: string) => {
  const concatLink = (path: string) =>
    /\/+/.test(path) ? path : [basePath, path].join('/')

  for (const group of linksGroup) {
    if (typeof group.link === 'string') {
      group.link = concatLink(group.link)
    }

    for (const link of group.links || []) {
      link.link = concatLink(link.link)
    }
  }

  return linksGroup
}

function Layout() {
  const match = useMatch({ from: Route.id, select: (route) => route.id })

  return (
    <>
      <NavbarNested linksGroup={processLinksGroup(match)} />
      <Box className={classes.containerWrap}>
        <Container fluid className={classes.container}>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
