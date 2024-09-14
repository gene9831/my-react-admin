import { keys } from '@mantine/core'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { tableData } from './tableData'
import type { OrderType, RowData } from './types'

const data = atom(tableData)
const search = atom('')
const sortOrder = atom<OrderType>('asc')
const sortBy = atom<keyof RowData>('date')
const sort = atom((get) => ({ order: get(sortOrder), sortBy: get(sortBy) }))
const setSortBy = atom(null, (get, set, value: keyof RowData) => {
  const nextOrder =
    get(sortBy) !== value ? 'asc' : get(sortOrder) === 'asc' ? 'desc' : 'asc'
  set(sortOrder, nextOrder)
  set(sortBy, value)
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
  const [_search, _setSearch] = useAtom(search)

  return {
    search: _search,
    setSearch: _setSearch,
    sort: useAtomValue(sort),
    setSortBy: useSetAtom(setSortBy),
    displayedData: useAtomValue(displayedData),
  }
}
