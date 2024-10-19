import { Box, Button, Space } from '@mantine/core'
import { useEffect, useState } from 'react'
import XLSX from 'xlsx'

const createSheet = () => {
  const data = [['Width', 10, 20, 30, 40, 50, 20, 20]]
  const ws = XLSX.utils.aoa_to_sheet(data)
  ws['!cols'] = []

  for (let i = 1; i <= 8; ++i) {
    const r: XLSX.ColInfo = {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (data[0][i] != null) (ws['!cols'][i] = r as any).wpx = data[0][i]
  }
  console.log(ws)
  return ws
}

export function XLSXTable() {
  // const tableRef = useRef<HTMLTableElement>(null)

  const [ws, setWs] = useState<XLSX.WorkSheet>()
  const [__html, setHTML] = useState('')

  useEffect(() => {
    const ws = createSheet()
    setWs(ws)
    setHTML(XLSX.utils.sheet_to_html(ws))
  }, [])

  const handleExport = () => {
    // const workBook = XLSX.utils.table_to_book(tableRef.current)
    // XLSX.writeFile(workBook, 'SheetJSTable.xlsx')

    if (!ws) {
      return
    }
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Formats')
    XLSX.writeFile(wb, `SheetJSColProps.xlsx`, { cellStyles: true })
  }

  return (
    <Box>
      <Button onClick={handleExport}>
        <b>Export XLSX!</b>
      </Button>
      <Space h="lg"></Space>
      <Box className="h-[297mm] w-[210mm] overflow-hidden bg-white p-[20mm] text-black shadow-md">
        <div dangerouslySetInnerHTML={{ __html }} />
      </Box>
    </Box>
  )
}
