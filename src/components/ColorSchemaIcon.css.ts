import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme'

export const button = style({
  width: rem(34),
  height: rem(34),
  borderRadius: vars.radius.md,
  borderColor: vars.colors.defaultBorder,
  selectors: {
    [vars.lightSelector]: {
      color: vars.colors.gray[7],
    },
    [vars.darkSelector]: {
      color: vars.colors.text,
    },
  },
})

export const icon = style({
  width: rem(22),
  height: rem(22),
})
