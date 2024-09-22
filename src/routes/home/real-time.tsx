import { TestGrid } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/real-time')({
  component: () => <TestGrid></TestGrid>,
})
