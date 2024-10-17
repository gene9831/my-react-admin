import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const h3 = style({
  textAlign: 'center',
})

export const toolsContainer = style({
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.spacing.md,
  marginTop: vars.spacing.md,
})

export const inputContainer = style({
  alignItems: 'center',
  gap: vars.spacing.lg,
})

export const dateInputRoot = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
})

export const dateInputLabel = style({
  fontSize: vars.fontSizes.md,
})

export const table1Cell1 = style({
  textWrap: 'nowrap',
})

export const table1Cell2 = style({
  textWrap: 'nowrap',
  color: vars.colors.white,
  textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)`,
  textAlign: 'center',
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `${rem(96)} repeat(9, 1fr)`,
  gridTemplateRows: `${rem(56)} ${rem(56)} ${rem(56)} ${rem(102)} ${rem(56)}`,
  borderLeft: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  borderTop: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  position: 'relative',
  fontSize: vars.fontSizes.sm,
})

export const item = style({
  borderRight: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  borderBottom: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const person = style({
  color: 'white',
  position: 'absolute',
  width: `calc(100% - 2 * ${vars.spacing.xs})`,
  height: rem(36),
  margin: vars.spacing.xs,
  borderRadius: vars.radius.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  fontSize: vars.fontSizes.xs,
  textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)`,
})

export const person1 = style([
  person,
  {
    backgroundColor: vars.colors.blue.filled,
  },
])

export const person2 = style([
  person,
  {
    backgroundColor: vars.colors.green.filled,
    top: `calc(${rem(36)} + ${vars.spacing.xs})`,
  },
])

export const person3 = style([
  person,
  {
    backgroundColor: vars.colors.yellow.filled,
  },
])

export const workListBox = style({
  flex: 1,
  border: `${rem(1)} solid ${vars.colors.defaultBorder}`,
  borderRadius: vars.radius.sm,
  padding: vars.spacing.xs,
  fontSize: vars.fontSizes.sm,
})
