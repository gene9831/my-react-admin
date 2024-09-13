import { keys } from '@mantine/core'
import { atom } from 'jotai'
import { tableData } from './tableData'
import type { OrderType, RowData } from './types'

const data = atom(tableData)
const search = atom('')
const sort = atom<{ order: OrderType; sortBy: keyof RowData }>({
  order: 'asc',
  sortBy: 'date',
})
const setSortBy = atom(null, (_get, set, sortBy: keyof RowData) => {
  set(sort, (previous) => {
    const nextOrder =
      previous.sortBy !== sortBy
        ? 'asc'
        : previous.order === 'asc'
          ? 'desc'
          : 'asc'
    return {
      order: nextOrder,
      sortBy,
    }
  })
})

const filteredData = atom((get) => {
  const query = get(search).toLowerCase().trim()
  return get(data).filter((item) =>
    keys(item).some((key) => item[key].toLowerCase().includes(query)),
  )
})

const displayedData = atom((get) => {
  const filteredDataValue = get(filteredData)
  const { order, sortBy } = get(sort)

  return filteredDataValue.slice().sort((a, b) => {
    if (order === 'asc') {
      return a[sortBy].localeCompare(b[sortBy])
    }

    return b[sortBy].localeCompare(a[sortBy])
  })
})

export const useStore = () => {
  return { data, search, sort, displayedData, setSortBy }
}
