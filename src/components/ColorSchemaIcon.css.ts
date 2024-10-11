import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const button = style({
  width: rem(34),
  height: rem(34),
  borderRadius: vars.radius.md,
  borderColor: vars.colors.defaultBorder,
  color: vars.colors.textSecondary,
  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },
})

export const icon = style({
  width: rem(22),
  height: rem(22),
})
