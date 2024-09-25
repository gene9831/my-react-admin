import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { globalStyle, style } from '@vanilla-extract/css'

export const PILL_HEIGHT = 30

export const testGrid = style({
  borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  borderTop: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  position: 'relative',
})

export const baseCell = style({})

globalStyle(`${testGrid} > ${baseCell}`, {
  padding: rem(8),
  borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  boxSizing: 'content-box',
  minHeight: rem(PILL_HEIGHT),
})

export const pill = style({
  height: rem(PILL_HEIGHT),
  fontSize: vars.fontSizes.sm,
  lineHeight: 1.2,
  padding: `${rem(4)} ${rem(8)}`,
  backgroundColor: vars.colors.gray[1],
  borderRadius: vars.radius.md,
})
