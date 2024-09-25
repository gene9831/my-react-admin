import { Box, Center, rem, SimpleGrid } from '@mantine/core'
import * as classes from './TestGrid2.css'

interface Period {
  start: number
  end: number
}

interface PeriodWidthRowIndex extends Period {
  rowIndex: number
}

interface WorkData {
  id: string
  periods: Period[]
}

interface WorkDataWidthRowIndex {
  id: string
  periods: PeriodWidthRowIndex[]
}

const dataList: WorkData[][] = [
  [
    {
      id: '1',
      periods: [
        { start: 0, end: 1 },
        { start: 4, end: 8 },
      ],
    },
    { id: '2', periods: [{ start: 0, end: 2 }] },
    {
      id: '3',
      periods: [
        { start: 1, end: 2 },
        { start: 3, end: 5 },
      ],
    },
  ],
]

function newArray<T>(length: number, fill: T) {
  return Array.from({ length }).fill(fill) as T[]
}

const periodsToArr = (periods: WorkData['periods']) => {
  return periods.map((item) =>
    [
      newArray(item.start, 0),
      newArray(item.end - item.start, 1),
      newArray(8 - item.end, 0),
    ].reduce((a, b) => a.concat(b)),
  )
}

const noConflict = (a: unknown[], b: unknown[]) => {
  return Array.from({ length: a.length }).every(
    (_, i) => !(Boolean(a[i]) && Boolean(b[i])),
  )
}

const processDayWork = (data: WorkData[]) => {
  const rows: number[][] = []
  const result: WorkDataWidthRowIndex[] = []

  for (const workData of data) {
    const { periods, ...rest } = workData

    const periodsArr = periodsToArr(periods)

    const rowIndexes: number[] = []
    for (const item of periodsArr) {
      let rowIndex = rows.findIndex((i) => noConflict(i, item))
      if (rowIndex === -1) {
        rowIndex = rows.length
        rows.push(item)
      } else {
        rows[rowIndex] = rows[rowIndex].map((v, i) => v || item[i])
      }
      rowIndexes.push(rowIndex)
    }

    const periodsWithRowIndex = periods.map((item, index) => ({
      ...item,
      rowIndex: rowIndexes[index],
    }))

    result.push({ ...rest, periods: periodsWithRowIndex })
  }

  return { rowNum: rows.length, data: result }
}

const data = dataList.map((item) => processDayWork(item))

export function TestGrid2() {
  const calcHeight = (i: number) => {
    const rowNum = data[Math.floor(i / 8)]?.rowNum || 0
    return rowNum > 0
      ? rem(rowNum * classes.PILL_HEIGHT + (rowNum - 1) * 8)
      : undefined
  }

  return (
    <SimpleGrid cols={8} spacing={0} className={classes.testGrid}>
      {Array.from({ length: 5 * 8 }).map((_, i) => (
        <Box
          key={i}
          className={classes.baseCell}
          style={{
            height: i % 8 === 0 ? calcHeight(i) : undefined,
          }}
        ></Box>
      ))}
      <Center
        className={classes.pill}
        style={{
          position: 'absolute',
          gridArea: '1/2/2/4',
          boxSizing: 'border-box',
          left: rem(8),
          right: rem(8),
          top: rem(8),
        }}
      >
        3
      </Center>
    </SimpleGrid>
  )
}
