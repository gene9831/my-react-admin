import { createTheme } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

export const theme = createTheme({
  /** Your theme override here */
})

export const vars = themeToVars(theme)
