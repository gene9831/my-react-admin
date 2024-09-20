import { XLSXTable } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/outlook')({
  component: () => <Outlook></Outlook>,
})

function Outlook() {
  return <XLSXTable></XLSXTable>
}
