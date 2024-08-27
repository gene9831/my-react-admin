import { style } from '@vanilla-extract/css'
import { vars } from '../theme'
import { rem } from '@mantine/core'

export const header = style({
  height: rem(56),
  borderBottom: `${rem(1)} solid`,
  selectors: {
    [vars.lightSelector]: {
      borderBottomColor: vars.colors.gray[3],
    },
    [vars.darkSelector]: {
      borderBottomColor: vars.colors.dark[4],
    },
  },
})

export const container = style({
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const link = style({
  height: rem(36),
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${rem(18)}`,
  textDecoration: 'none',
  borderRadius: vars.radius.sm,
  color: vars.colors.text,
  fontSize: vars.fontSizes.sm,
  fontWeight: 600,
  selectors: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
    '[data-mantine-color-scheme] &[data-active]': {
      backgroundColor: vars.colors.blue.filled,
      color: vars.colors.white,
    },
  },
})
