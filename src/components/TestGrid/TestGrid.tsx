import { DateInput } from '@mantine/dates'
import * as classes from './TestGrid.css'
import { IconCalendarMonth } from '@tabler/icons-react'

const weekday = [
  '2024-07-01|周一',
  '2024-07-02|周二',
  '2024-07-03|周三',
  '2024-07-04|周四',
  '2024-07-05|周五',
] as const

const calc = (s: string) => {
  const [start, end] = s.split('/').map((i) => parseInt(i))
  return `${start + 7}:00-${end + 7}:00`
}

export function TestGrid() {
  const heads = Array.from({ length: 10 }).map((_, i) => (
    <div className={classes.item} key={i}>
      {i > 0 ? (i == 9 ? '其他出勤人员' : `${8 + i}:00-${9 + i}:00`) : ''}
    </div>
  ))

  const cells = Array.from({ length: 50 }).map((_, i) => {
    if (i % 10 === 0) {
      return (
        <div
          className={classes.item}
          style={{ flexDirection: 'column' }}
          key={i}
        >
          <span> {weekday[Math.floor(i / 9)].split('|')[1]}</span>
          <span>{weekday[Math.floor(i / 9)].split('|')[0]}</span>
        </div>
      )
    }
    return <div className={classes.item} key={i}></div>
  })

  const cells2 = Array.from({ length: 10 }).map((_, i) => {
    if (i % 2 === 0) {
      return (
        <div
          className={classes.item}
          style={{ flexDirection: 'column' }}
          key={i}
        >
          <span>{weekday[Math.floor(i / 2)].split('|')[1]}</span>
          <span>{weekday[Math.floor(i / 2)].split('|')[0]}</span>
        </div>
      )
    }
    return <div className={classes.item} key={i}></div>
  })

  return (
    <>
      <h3 className={classes.h3}>出勤人员表</h3>
      <div className={classes.inputContainer}>
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择开始日期"
          placeholder="请选择开始日期"
          rightSection={<IconCalendarMonth />}
          locale="zh"
          classNames={{
            root: classes.dateInputRoot,
            label: classes.dateInputLabel,
          }}
        />
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择结束日期"
          placeholder="请选择结束日期"
          rightSection={<IconCalendarMonth />}
          classNames={{
            root: classes.dateInputRoot,
            label: classes.dateInputLabel,
          }}
        />
      </div>
      <div className={classes.grid2}>
        {cells2}
        <div className={classes.personx1} style={{ gridArea: '1/2/2/3' }}>
          员工1
        </div>
        <div className={classes.personx2} style={{ gridArea: '1/2/2/3' }}>
          员工2
        </div>
        <div className={classes.personx3} style={{ gridArea: '1/2/2/3' }}>
          员工3
        </div>
        <div className={classes.personx1} style={{ gridArea: '2/2/3/3' }}>
          员工1
        </div>
        <div className={classes.personx2} style={{ gridArea: '2/2/3/3' }}>
          员工2
        </div>
        <div className={classes.personx3} style={{ gridArea: '2/2/3/3' }}>
          员工3
        </div>
        <div className={classes.personx4} style={{ gridArea: '2/2/3/3' }}>
          员工4
        </div>
      </div>
      <h3 className={classes.h3}>出勤明细表</h3>
      <div className={classes.inputContainer}>
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择开始日期"
          placeholder="请选择开始日期"
          locale="zh"
          rightSection={<IconCalendarMonth />}
          classNames={{
            root: classes.dateInputRoot,
            label: classes.dateInputLabel,
          }}
        />
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择结束日期"
          placeholder="请选择结束日期"
          rightSection={<IconCalendarMonth />}
          classNames={{
            root: classes.dateInputRoot,
            label: classes.dateInputLabel,
          }}
        />
      </div>
      <div className={classes.grid}>
        {heads}
        {cells}
        <div className={classes.person1} style={{ gridArea: '2/2/3/4' }}>
          员工1 {calc('2/4')}
        </div>
        <div className={classes.person2} style={{ gridArea: '2/3/3/5' }}>
          员工2 {calc('3/5')}
        </div>
        <div className={classes.person1} style={{ gridArea: '2/6/3/9' }}>
          员工1 {calc('6/9')}
        </div>
        <div className={classes.person2} style={{ gridArea: '2/6/3/7' }}>
          员工2 {calc('6/7')}
        </div>
        <div className={classes.person3} style={{ gridArea: '2/10/3/11' }}>
          员工3
        </div>
        <div className={classes.person1} style={{ gridArea: '3/3/4/5' }}>
          员工1 {calc('3/5')}
        </div>{' '}
        <div className={classes.person2} style={{ gridArea: '3/2/4/4' }}>
          员工2 {calc('2/4')}
        </div>
        <div className={classes.person3} style={{ gridArea: '3/2/4/3' }}>
          员工3 {calc('2/3')}
        </div>
        <div className={classes.person3} style={{ gridArea: '3/5/4/10' }}>
          员工3 {calc('5/10')}
        </div>
        <div className={classes.person4} style={{ gridArea: '3/4/4/7' }}>
          员工4 {calc('4/7')}
        </div>
      </div>
    </>
  )
}
