import { SIDEBAR_WIDTH, TOOLBAR_HEIGHT } from '@/constants/style'
import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const navbar = style({
  width: rem(SIDEBAR_WIDTH),
  backgroundColor: vars.colors.default,
  padding: vars.spacing.md,
  borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: rem(TOOLBAR_HEIGHT),
  left: 0,
  bottom: 0,
})

export const scrollArea = style({
  flex: 1,
  marginLeft: `calc(${vars.spacing.md} * -1)`,
  marginRight: `calc(${vars.spacing.md} * -1)`,
})
