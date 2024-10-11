import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

const active = style({
  selectors: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
    '&[data-active]': {
      color: vars.colors.primaryColors[8],
      backgroundColor: vars.colors.primaryColors.lightHover,
    },
    [`${vars.darkSelector}[data-active]`]: {
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
    color: vars.colors.textSecondary,
    selectors: {
      [vars.darkSelector]: {
        color: vars.colors.text,
      },
      '&[data-active]': {
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
