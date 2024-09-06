import { Box } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/dashboard')({
  component: () => <Box>Dashboard</Box>,
})
