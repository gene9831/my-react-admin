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

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

const linksGroup: LinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments, link: '/settings' },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
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
