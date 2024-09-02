import { Text, Title } from '@mantine/core'
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'
import type { LinksGroupProps } from '../components'
import { NavbarNested } from '../components'

export const Route = createFileRoute('/')({
  component: Index,
})

const linksGroup: LinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge },
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
  { label: 'Settings', icon: IconAdjustments },
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

function Index() {
  return (
    <>
      <NavbarNested linksGroup={linksGroup} />
      <div style={{ paddingLeft: 300 }}>
        <div style={{ padding: 48 }}>
          <Title order={1}>Heading 1</Title>
          <Title order={2}>Heading 2</Title>
          <Title order={3}>Heading 3</Title>
          <Title order={4}>Heading 4</Title>
          <Title order={5}>Heading 5</Title>
          <Title order={6}>Heading 6</Title>
          <Text fz="md" lh="md">
            Paras is an orange, insectoid Pokémon that resembles the nymph stage
            of a cicada. Its ovoid body is segmented, and it has three pairs of
            legs. The foremost pair of legs is the largest and has sharp claws
            at the tips. There are five specks on its forehead and three teeth
            on either side of its mouth. It has circular eyes with large
            pseudopupils.
          </Text>
        </div>
      </div>
    </>
  )
}
