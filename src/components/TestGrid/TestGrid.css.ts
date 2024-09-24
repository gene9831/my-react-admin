import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const h3 = style({
  textAlign: 'center',
})

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.lg,
  marginBottom: vars.spacing.md,
})

export const dateInputRoot = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
})

export const dateInputLabel = style({
  fontSize: vars.fontSizes.md,
})

export const grid2 = style({
  display: 'grid',
  gridTemplateColumns: `${rem(96)} repeat(1, 1fr)`,
  gridTemplateRows: `repeat(5, ${rem(56)})`,
  borderLeft: `${rem(1)} solid black`,
  borderTop: `${rem(1)} solid black`,
  position: 'relative',
})

const personx = style({
  color: 'white',
  position: 'absolute',
  margin: vars.spacing.xs,
  borderRadius: '1000rem',
  padding: `${rem(4)} ${vars.spacing.md}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  fontSize: vars.fontSizes.xs,
  textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)`,
  height: rem(32),
})

export const personx1 = style([
  personx,
  {
    backgroundColor: vars.colors.blue.filled,
  },
])

export const personx2 = style([
  personx,
  {
    backgroundColor: vars.colors.yellow.filled,
    left: rem(70),
  },
])

export const personx3 = style([
  personx,
  {
    backgroundColor: vars.colors.green.filled,
    left: rem(70 * 2),
  },
])

export const personx4 = style([
  personx,
  {
    backgroundColor: vars.colors.orange.filled,
    left: rem(70 * 3),
  },
])

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `${rem(96)} repeat(9, 1fr)`,
  gridTemplateRows: `${rem(56)} repeat(5, ${rem(102)})`,
  borderLeft: `${rem(1)} solid black`,
  borderTop: `${rem(1)} solid black`,
  position: 'relative',
})

export const item = style({
  borderRight: `${rem(1)} solid black`,
  borderBottom: `${rem(1)} solid black`,
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
    backgroundColor: vars.colors.yellow.filled,
    top: `calc(${rem(36)} + ${vars.spacing.xs})`,
  },
])

export const person3 = style([
  person,
  {
    backgroundColor: vars.colors.green.filled,
  },
])

export const person4 = style([
  person,
  {
    backgroundColor: vars.colors.orange.filled,
    top: `calc(${rem(36)} + ${vars.spacing.xs})`,
  },
])
