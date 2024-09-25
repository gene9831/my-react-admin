import {
  Button,
  Center,
  Checkbox,
  Flex,
  Modal,
  Select,
  Space,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useDisclosure } from '@mantine/hooks'
import {
  IconCalendarMonth,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
import * as classes from './TestGrid.css'

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

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <h3 className={classes.h3}>出勤人员表</h3>
      <div className={classes.inputContainer}>
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择开始日期"
          placeholder="请选择开始日期"
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
      <Space h="lg"></Space>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title="添加安排"
        centered
      >
        <Flex gap="sm">
          <Select
            label="开始时间"
            data={Array.from({ length: 8 }).map((_, i) => `${i + 9}:00`)}
            style={{ flex: 1 }}
          />
          <Select
            label="结束时间"
            data={Array.from({ length: 8 }).map((_, i) => `${i + 10}:00`)}
            style={{ flex: 1 }}
          />
        </Flex>
        <Space h="md"></Space>
        <Flex gap="sm">
          <Stack className={classes.workListBox} gap="sm">
            <Text size="sm">可选项</Text>
            <Text size="xs" c="dimmed">
              当前部门员工
            </Text>
            {['员工1', '员工2'].map((item) => (
              <Flex key={item} gap="sm">
                <Checkbox></Checkbox>
                <Text size="sm">{item}</Text>
              </Flex>
            ))}
            {['员工3', '员工4'].map((item) => (
              <Flex key={item} gap="sm">
                <Checkbox disabled></Checkbox>
                <Text size="sm" c="gray">
                  {item}（已有安排）
                </Text>
              </Flex>
            ))}
            <Text size="xs" c="dimmed">
              其他部门员工
            </Text>
            <Flex gap="sm">
              <Checkbox></Checkbox>
              <Text size="sm" c="yellow">
                其他部门员工1（忙碌中）
              </Text>
            </Flex>
            <Flex gap="sm">
              <Checkbox></Checkbox>
              <Text size="sm">其他部门员工2</Text>
            </Flex>
          </Stack>
          <Center>
            <Flex gap="xs">
              <ThemeIcon>
                <UnstyledButton>
                  <IconChevronLeft />
                </UnstyledButton>
              </ThemeIcon>
              <ThemeIcon>
                <UnstyledButton>
                  <IconChevronRight />
                </UnstyledButton>
              </ThemeIcon>
            </Flex>
          </Center>
          <Stack className={classes.workListBox} gap="sm">
            <Text size="sm">已选择员工</Text>
            <Text size="xs" c="dimmed">
              当前部门员工
            </Text>
            {['员工1'].map((item) => (
              <Flex key={item} gap="sm">
                <Checkbox></Checkbox>
                <span>{item}</span>
              </Flex>
            ))}
            <Text size="xs" c="dimmed">
              其他部门员工
            </Text>
            <Flex gap="sm">
              <Checkbox></Checkbox>
              <Text size="sm" c="yellow">
                其他部门员工1（忙碌中）
              </Text>
            </Flex>
          </Stack>
        </Flex>
        <Space h="md"></Space>
        <Flex gap="md" justify="flex-end">
          <Button variant="default" style={{ fontWeight: 'normal' }}>
            取消
          </Button>
          <Button style={{ fontWeight: 'normal' }}>确定</Button>
        </Flex>
      </Modal>
      <Button onClick={open}>添加安排</Button>
    </>
  )
}
