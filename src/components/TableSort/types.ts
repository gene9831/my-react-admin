import type { tableData } from './tableData'

export type RowData = (typeof tableData)[number]
export type OrderType = 'asc' | 'desc'
