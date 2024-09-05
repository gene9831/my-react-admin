import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const header = style({
  width: '100%',
  height: rem(56),
  backgroundColor: vars.colors.default,
  borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  position: 'fixed',
  top: 0,
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
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
    },
  },
})
