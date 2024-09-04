import type { CSSVariablesResolver } from '@mantine/core'
import { createTheme } from '@mantine/core'
import type { MantineVars } from '@mantine/vanilla-extract'
import { themeToVars } from '@mantine/vanilla-extract'

export const theme = createTheme({
  /** Your theme override here */
})

const CssVarTokens = {
  colorTextSecondary: '--mantine-color-text-secondary',
} as const

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    [CssVarTokens.colorTextSecondary]: theme.colors.gray[7],
  },
  dark: {
    [CssVarTokens.colorTextSecondary]: theme.colors.dark[2],
  },
})

type CustomMantineVars = MantineVars & {
  colors: { textSecondary: string }
}

export const vars = themeToVars(theme) as CustomMantineVars

vars.colors.textSecondary = `var(${CssVarTokens.colorTextSecondary})`
