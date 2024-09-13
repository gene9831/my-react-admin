import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const th = style({
  padding: 0,
})

export const control = style({
  width: '100%',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.defaultHover,
    },
  },
})

export const icon = style({
  width: rem(21),
  height: rem(21),
  borderRadius: rem(21),
})
