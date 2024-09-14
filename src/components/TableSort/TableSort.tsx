import {
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
  rem,
} from '@mantine/core'
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from '@tabler/icons-react'
import * as classes from './TableSort.css'
import { useStore } from './store'
import type { OrderType, RowData } from './types'

interface ThProps {
  children: React.ReactNode
  order: OrderType
  sorted: boolean
  onSort(): void
}

function Th({ children, order, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? order === 'asc'
      ? IconChevronUp
      : IconChevronDown
    : IconSelector
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  )
}

const columns: Array<{ label: string; field: keyof RowData }> = [
  { label: 'Name', field: 'name' },
  { label: 'Gender', field: 'gender' },
  { label: 'Email', field: 'email' },
  { label: 'Date', field: 'date' },
  { label: 'Company', field: 'company' },
  { label: 'Salary', field: 'salary' },
  { label: 'City', field: 'city' },
]

export function TableSort() {
  const { search, setSearch, sort, setSortBy, displayedData } = useStore()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
  }

  const rows = displayedData.map((row) => (
    <Table.Tr key={row.id}>
      {columns.map(({ field }) => (
        <Table.Td key={field}>{row[field]}</Table.Td>
      ))}
    </Table.Tr>
  ))

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            {columns.map(({ label, field }) => (
              <Th
                key={field}
                sorted={sort.sortBy === field}
                order={sort.order}
                // TODO 这里似乎不满足纯函数原则，相同field输入会引起不同结果
                onSort={() => setSortBy(field)}
              >
                {label}
              </Th>
            ))}
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={columns.length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  )
}
