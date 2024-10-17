import { TOOLBAR_HEIGHT } from '@/constants/style'
import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const header = style({
  height: rem(TOOLBAR_HEIGHT),
  backgroundColor: vars.colors.default,
  borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
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
    '&[data-active]': {
      backgroundColor: vars.colors.primary,
      color: vars.colors.white,
    },
  },
})
