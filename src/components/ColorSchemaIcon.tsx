import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import * as classes from './ColorSchemaIcon.css'

export function ColorSchemaIcon() {
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme()

  const Icon = computedColorScheme === 'dark' ? IconSun : IconMoon

  return (
    <ActionIcon
      className={classes.button}
      variant="default"
      onClick={() => toggleColorScheme()}
    >
      <Icon strokeWidth={1.5} className={classes.icon} />
    </ActionIcon>
  )
}
