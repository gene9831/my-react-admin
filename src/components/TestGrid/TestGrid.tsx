import * as classes from './TestGrid.css'

const weekday = ['周一', '周二', '周三', '周四', '周五'] as const

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
        <div className={classes.item} key={i}>
          {weekday[Math.floor(i / 9)]}
        </div>
      )
    }
    return <div className={classes.item} key={i}></div>
  })

  const cells2 = Array.from({ length: 10 }).map((_, i) => {
    if (i % 2 === 0) {
      return (
        <div className={classes.item} key={i}>
          {weekday[Math.floor(i / 2)]}
        </div>
      )
    }
    return <div className={classes.item} key={i}></div>
  })

  return (
    <>
      <h3 className={classes.h3}>出勤人员表</h3>
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
