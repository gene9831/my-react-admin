import { keys } from '@mantine/core'
import { atom, useAtom, useAtomValue } from 'jotai'
import { tableData } from './tableData'
import type { OrderType, RowData } from './types'

const data = atom(tableData)
const search = atom('')
const sort = atom<{ order: OrderType; field: keyof RowData }>({
  order: 'asc',
  field: 'date',
})

const filteredData = atom((get) => {
  const query = get(search).toLowerCase().trim()
  return get(data).filter((item) =>
    keys(item).some((key) => item[key].toLowerCase().includes(query)),
  )
})

const displayedData = atom((get) => {
  const filteredDataValue = get(filteredData)
  const { order, field } = get(sort)

  return filteredDataValue.slice().sort((a, b) => {
    if (order === 'asc') {
      return a[field].localeCompare(b[field])
    }

    return b[field].localeCompare(a[field])
  })
})

export const useStore = () => {
  const [_search, _setSearch] = useAtom(search)
  const [_sort, _setSort] = useAtom(sort)

  return {
    search: _search,
    setSearch: _setSearch,
    sort: _sort,
    setSort: _setSort,
    displayedData: useAtomValue(displayedData),
  }
}
