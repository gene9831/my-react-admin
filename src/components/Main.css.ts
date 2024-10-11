import { TOOLBAR_HEIGHT } from '@/constants/style'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const main = style({
  paddingTop: rem(TOOLBAR_HEIGHT),
})
