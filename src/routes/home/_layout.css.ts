import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const containerWrap = style({
  paddingLeft: rem(300),
})

export const container = style({
  padding: `${vars.spacing.xl} calc(${vars.spacing.xl} * 2)`,
})
