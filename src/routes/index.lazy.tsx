import { createLazyFileRoute } from '@tanstack/react-router'
import { NavbarNested } from '../components'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <NavbarNested />
    </>
  )
}
