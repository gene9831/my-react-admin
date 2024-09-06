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
import { createFileRoute, Outlet } from '@tanstack/react-router'
import * as classes from './route.css'

export const Route = createFileRoute('/home')({
  component: Layout,
})

const linksGroup: LinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/home/dashboard' },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/home' },
      { label: 'Forecasts', link: '/home' },
      { label: 'Outlook', link: '/home' },
      { label: 'Real time', link: '/home' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/home' },
      { label: 'Previous releases', link: '/home' },
      { label: 'Releases schedule', link: '/home' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments, link: '/home/settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/home' },
      { label: 'Change password', link: '/home' },
      { label: 'Recovery codes', link: '/home' },
    ],
  },
]

function Layout() {
  return (
    <>
      <NavbarNested linksGroup={linksGroup} />
      <Box className={classes.containerWrap}>
        <Container fluid className={classes.container}>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
