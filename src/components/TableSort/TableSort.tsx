import {
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core'
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from '@tabler/icons-react'
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
    <Table.Th className="p-0">
      <UnstyledButton
        className="w-full px-md py-xs hover:bg-hover"
        onClick={onSort}
      >
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Icon className="size-4" stroke={1.5} />
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
  const { search, setSearch, sort, setSort, displayedData } = useStore()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
  }

  const handleSort = (sortBy: keyof RowData) => {
    const { order, field } = sort
    const fieldChanged = field !== sortBy
    const reverseOrder = (o: OrderType): OrderType =>
      o === 'asc' ? 'desc' : 'asc'

    setSort({
      order: fieldChanged ? 'asc' : reverseOrder(order),
      field: sortBy,
    })
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
        leftSection={<IconSearch className="size-4" stroke={1.5} />}
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
                sorted={sort.field === field}
                order={sort.order}
                onSort={() => handleSort(field)}
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
