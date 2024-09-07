import { TableSort } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/forecasts')({
  component: () => <TableSort></TableSort>,
})
