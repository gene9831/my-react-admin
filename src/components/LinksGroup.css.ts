import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

const active = style({
  selectors: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
    '[data-mantine-color-scheme] &[data-active]': {
      backgroundColor: vars.colors.primaryColors.lightHover,
    },
    [`${vars.lightSelector}&[data-active]`]: {
      color: vars.colors.primaryColors[8],
    },
    [`${vars.darkSelector}&[data-active]`]: {
      color: vars.colors.primaryColors[1],
    },
  },
})

export const control = style([
  {
    fontWeight: 600,
    display: 'block',
    width: '100%',
    padding: `${vars.spacing.xs} ${vars.spacing.md}`,
    fontSize: vars.fontSizes.sm,
  },
  active,
])

export const link = style([
  {
    fontWeight: 600,
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
      '[data-mantine-color-scheme] &[data-active]': {
        fontWeight: 600,
        borderLeftColor: vars.colors.primaryColors[5],
      },
    },
  },
  active,
])

export const icon = style({
  width: rem(18),
  height: rem(18),
})

export const chevron = style({
  width: rem(16),
  height: rem(16),
  transition: 'transform 200ms ease',
})
