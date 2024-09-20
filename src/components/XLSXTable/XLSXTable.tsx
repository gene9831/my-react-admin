import { Box, Button } from '@mantine/core'
import { useEffect, useState } from 'react'
import XLSX from 'xlsx'
import * as classes from './XLSXTable.css'

const createSheet = () => {
  const data = [['Width', 10, 20, 30, 40, 50, 20, 20]]
  const ws = XLSX.utils.aoa_to_sheet(data)
  ws['!cols'] = []

  for (let i = 1; i <= 8; ++i) {
    const r: XLSX.ColInfo = {}
    if (data[0][i] != null) (ws['!cols'][i] = r).wpx = data[0][i]
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
    <Box className={classes.container}>
      <Button onClick={handleExport}>
        <b>Export XLSX!</b>
      </Button>
      <Box className={classes.a4Page}>
        <div dangerouslySetInnerHTML={{ __html }} />
        {/* <table ref={tableRef} className={classes.table}>
          <tbody>
            <tr>
              <td colSpan={3}>SheetJS Table Export</td>
            </tr>
            <tr>
              <td>Author</td>
              <td>ID</td>
              <td>你好!</td>
            </tr>
            <tr>
              <td>SheetJS</td>
              <td>7262</td>
              <td>வணக்கம்!</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <a href="//sheetjs.com">Powered by SheetJS</a>
              </td>
            </tr>
          </tbody>
        </table> */}
      </Box>
    </Box>
  )
}
