import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import { vars } from '../theme'

export const control = style({
  fontWeight: 500,
  display: 'block',
  width: '100%',
  padding: `${vars.spacing.xs} ${vars.spacing.md}`,
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
  borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  selectors: {
    [vars.lightSelector]: {
      color: vars.colors.textSecondary,
    },
    [vars.darkSelector]: {
      color: vars.colors.text,
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
