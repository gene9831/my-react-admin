import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: vars.spacing.lg,
})

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  border: `${rem(2)} solid rgb(140 140 140)`,
})

globalStyle(`${table} th, ${table} td`, {
  border: `${rem(1)} solid rgb(160 160 160)`,
})

export const a4Page = style({
  width: '210mm',
  height: '297mm',
  padding: '20mm',
  boxShadow: vars.shadows.sm,
  color: 'black',
  backgroundColor: 'white',
  overflow: 'hidden',
})
