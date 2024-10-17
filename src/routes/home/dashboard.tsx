import { Box, Input, List } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { atom, useAtom, useAtomValue } from 'jotai'

export const Route = createFileRoute('/home/dashboard')({
  component: () => <Dashboard></Dashboard>,
})

const dataAtom = atom(['abc', 'aaa', 'bbb', '123'])
const filterAtom = atom('')
const fiteredArrAtom = atom((get) => {
  const filter = get(filterAtom)
  return get(dataAtom).filter((item) => item.includes(filter))
})

function Dashboard() {
  const [filter, setFilter] = useAtom(filterAtom)
  const fiteredArr = useAtomValue(fiteredArrAtom)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setFilter(value)
  }

  return (
    <Box>
      <h2>Jotai Demo</h2>
      <Input value={filter} onChange={handleChange}></Input>
      <List>
        {fiteredArr.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </Box>
  )
}
