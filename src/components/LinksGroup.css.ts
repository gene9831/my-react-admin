import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme'

export const control = style({
  fontWeight: 500,
  display: 'block',
  width: '100%',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  color: vars.colors.text,
  fontSize: vars.fontSizes.sm,
  selectors: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
  },
})

export const link = style({
  fontWeight: 500,
  display: 'block',
  textDecoration: 'none',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
  paddingLeft: vars.spacing.md,
  marginLeft: vars.spacing.xl,
  fontSize: vars.fontSizes.sm,
  borderLeft: `${rem(1)} solid`,
  selectors: {
    [vars.lightSelector]: {
      color: vars.colors.gray[7],
      borderLeftColor: vars.colors.gray[3],
    },
    [vars.darkSelector]: {
      color: vars.colors.text,
      borderLeftColor: vars.colors.dark[4],
    },
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
  },
})

export const icon = style({
  width: rem(18),
  height: rem(18),
})

export const chevron = style({
  width: rem(16),
  height: rem(16),
  transition: 'transform 200ms ease',
})
