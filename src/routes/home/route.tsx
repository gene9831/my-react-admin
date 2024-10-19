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
      { label: 'Forecasts', link: 'forecasts' },
      { label: 'Outlook', link: 'outlook' },
      { label: 'Real time', link: 'real-time' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: 'upcoming-releases' },
      { label: 'Previous releases', link: 'previous-releases' },
      { label: 'Releases schedule', link: 'releases-schedule' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics, link: 'analytics' },
  { label: 'Contracts', icon: IconFileAnalytics, link: 'contracts' },
  { label: 'Settings', icon: IconAdjustments, link: 'settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: 'enable-2fa' },
      { label: 'Change password', link: 'change-password' },
      { label: 'Recovery codes', link: 'recovery-codes' },
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
      <Box className="pl-[var(--sidebar-width)]">
        <Container size="xl" className="py-md">
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
