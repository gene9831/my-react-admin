import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme'

export const navbar = style({
  width: rem(300),
  height: '100%',
  backgroundColor: vars.colors.default,
  padding: vars.spacing.md,
  display: 'flex',
  flexDirection: 'column',
  borderRight: `${rem(1)} solid`,
  flexShrink: 0,
  [vars.lightSelector]: {
    color: vars.colors.gray[7],
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
