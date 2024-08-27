import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const main = style({
  display: 'flex',
  height: `calc(100dvh - ${rem(56)})`,
})
