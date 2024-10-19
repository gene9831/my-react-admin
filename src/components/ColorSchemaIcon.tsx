import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export function ColorSchemaIcon() {
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme()

  const Icon = computedColorScheme === 'dark' ? IconSun : IconMoon

  return (
    <ActionIcon
      className="size-[34px] rounded-md text-gray-700 dark:text-white"
      variant="default"
      onClick={() => toggleColorScheme()}
    >
      <Icon strokeWidth={1.5} className="size-[22px]" />
    </ActionIcon>
  )
}
