import {
  Badge,
  Button,
  Center,
  Checkbox,
  Flex,
  Indicator,
  Modal,
  ScrollArea,
  Select,
  Space,
  Stack,
  Table,
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
  IconShare2,
} from '@tabler/icons-react'
import dayjs from 'dayjs'
import * as classes from './TestGrid.css'

const wd = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const tableOneHeads = () => {
  const firstDay = dayjs('2024/07/01')
  return Array.from({ length: 14 }).map(
    (_, i) => `${firstDay.add(i, 'day').format('YYYY/MM/DD')} ${wd[i % 7]}`,
  )
}

const workers = [
  {
    name: '员工1',
    department: '部门1',
    color: 'blue',
    data: [1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: '员工2',
    department: '部门1',
    color: 'blue',
    data: [1, 1, 2, 1, 1, 1, 1],
  },
  {
    name: '员工3',
    department: '部门1',
    color: 'blue',
    data: [1, 1, 1, 1, 3, 1, 1],
  },
  {
    name: '员工10',
    department: '部门2',
    color: 'green',
    data: [1, 1, 2, 1, 1, 1, 1],
  },
]

const workers2 = ['员工1', '员工2', '员工3', '员工4']

const getStyle = (worker: (typeof workers)[number], n: number) => {
  const color = worker.color === 'blue' ? '#228be6' : '#40c057'
  const strip = n === 2 ? '#2e2e2e' : '#dee2e6'
  return `repeating-linear-gradient(
45deg,
${color},
${color} 10px,
${strip} 10px,
${strip} 15px
)`
}

export function TestGrid() {
  const heads = Array.from({ length: 10 }).map((_, i) => (
    <div className={classes.item} key={i}>
      {i > 0 ? `${8 + i}:00-${9 + i}:00` : ''}
    </div>
  ))

  const cells = Array.from({ length: 40 }).map((_, i) => {
    if (i % 10 === 0) {
      return (
        <div
          className={classes.item}
          style={{ flexDirection: 'column' }}
          key={i}
        >
          <span> {workers2[Math.floor(i / 9)]}</span>
        </div>
      )
    }
    return <div className={classes.item} key={i}></div>
  })

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <h3 className={classes.h3}>出勤表</h3>
      <Flex className={classes.toolsContainer}>
        <Flex className={classes.inputContainer}>
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
          <Select
            label="选择部门"
            placeholder="选择部门"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            classNames={{
              root: classes.dateInputRoot,
              label: classes.dateInputLabel,
            }}
          />
        </Flex>
        <Flex>
          <Button variant="default" rightSection={<IconShare2 size={16} />}>
            导出
          </Button>
        </Flex>
      </Flex>
      <ScrollArea>
        <Table withColumnBorders withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              {tableOneHeads().map((head, i) => (
                <Table.Th key={i} fw="normal">
                  {head}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {workers.map((worker) => (
              <Table.Tr key={worker.name}>
                <Table.Td className={classes.table1Cell1}>
                  {worker.name}（{worker.department}）
                </Table.Td>
                {worker.data.map((n, i) => (
                  <Table.Td
                    key={i}
                    bg={n !== 3 ? worker.color : undefined}
                    className={classes.table1Cell2}
                    style={
                      {
                        // background: getStyle(worker, n),
                      }
                    }
                  >
                    {n === 2 ? (
                      <Badge fw="normal" size="lg" color="dark">
                        夜班
                      </Badge>
                    ) : n === 3 ? (
                      <Badge fw="normal" size="lg" color='gray'>
                        休息
                      </Badge>
                    ) : (
                      ''
                    )}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
      <h3 className={classes.h3}>排班表</h3>
      <div className={classes.toolsContainer}>
        <DateInput
          valueFormat="YYYY/MM/DD"
          label="请选择日期"
          placeholder="请选择日期"
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
        <div className={classes.person1} style={{ gridArea: '2/2/3/11' }}>
          9:00-18:00
        </div>
        <div className={classes.person1} style={{ gridArea: '3/2/4/6' }}>
          9:00-13:00
        </div>
        <div className={classes.person1} style={{ gridArea: '4/2/5/11' }}>
          9:00-18:00
        </div>
        <div className={classes.person2} style={{ gridArea: '4/4/5/6' }}>
          11:00-13:00（部门2）
        </div>
        <div className={classes.person1} style={{ gridArea: '5/2/6/6' }}>
          9:00-18:00
        </div>
        <div className={classes.person3} style={{ gridArea: '5/6/6/13' }}>
          13:00-18:00（部门3）
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
        <Flex>
          <Checkbox label="全天" />
        </Flex>
        <Space h="md"></Space>
        <Flex gap="sm">
          <Select
            label="开始时间"
            disabled
            data={Array.from({ length: 8 }).map((_, i) => `${i + 9}:00`)}
            style={{ flex: 1 }}
          />
          <Select
            label="结束时间"
            disabled
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
