import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme'

export const navbar = style({
  width: rem(300),
  backgroundColor: vars.colors.default,
  padding: vars.spacing.md,
  borderRight: `${rem(1)} solid`,
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: rem(56),
  left: 0,
  bottom: 0,
  [vars.lightSelector]: {
    borderRightColor: vars.colors.gray[3],
  },
  [vars.darkSelector]: {
    borderRightColor: vars.colors.dark[4],
  },
})

export const scrollArea = style({
  flex: 1,
  marginLeft: `calc(${vars.spacing.md} * -1)`,
  marginRight: `calc(${vars.spacing.md} * -1)`,
})
