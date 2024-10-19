# 样式开发文档

样式开发集成了两种方案，优先使用 tailwind css

## tailwind css

参考[官方文档](https://tailwindcss.com/docs/installation)，多用 `ctrl+k` 搜索功能

注意事项：

- 最好避免使用 `@apply`，使用 `@apply` 的最终效果其实和直接写 `css` 样式差不多
- 使用 `clsx` 来合并样式，或者实现动态样式
- 组件有 `data-[xxx]` 属性时，属性选择器优先级比伪类高，可以利用这一点来实现某些状态的组件样式不被覆盖

## css in ts

使用 `@vanilla-extract/css` 工具来实现 `css in ts`。好处是完善的类型和变量提示，缺点是不方便直接赋值原生的css代码

官方文档 <https://mantine.dev/styles/vanilla-extract/>

### 简单示例

```ts
// Demo.css.ts
import { vars } from '@/theme'
import { rem } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const containerWrap = style({
  paddingLeft: rem(56),
})

export const container = style({
  padding: `${vars.spacing.xl} calc(${vars.spacing.xl} * 2)`,
})
```

```tsx
// Demo.tsx
import * as classes from './Demo.css'

export function Demo() {
  return (
    <Box className={classes.containerWrap}>
      <Container size="xl" className={classes.container}>
        {/* content */}
      </Container>
    </Box>
  )
}
```

要点：

- 使用 `style` 函数来创建样式
- 使用 `rem` 函数将单位px转换成单位rem
- 使用 `theme.ts` 导出的 `vars` 来获取 `mantine` 主题的css变量

### 其他选择器

```ts
// Demo.css.ts
export const link = style({
  color: vars.colors.textSecondary,
  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
    [`${vars.darkSelector}[data-active]`]: {
      color: vars.colors.primaryColors[1],
    },
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: vars.colors.defaultHover,
    },
    '[data-mantine-color-scheme] &[data-active]': {
      backgroundColor: vars.colors.primary,
    },
  },
})
```

```tsx
// Demo.tsx
import * as classes from './Demo.css'

export function Demo() {
  const [active, setActive] = useState(true)

  return (
    <Anchor className={classes.link} data-active={active}>
      Label
    </Anchor>
  )
}
```

要点：

- 在 `selectors` 属性下写其他选择器
- 默认样式为亮色样式，不需要使用选择器；如果需要暗色再使用 `vars.darkSelector` 选择器来定义暗色样式
- 使用属性选择器 `&[data-xxx]` 给不同状态的组件设置样式
- 暗色选择器加上属性选择器组合为：`${vars.darkSelector}[data-xxx]`，中间没有空格。`vars.darkSelector` 相当于 `[data-mantine-color-scheme="dark"] &`
- 如果优先级不够高，可以加上 `[data-mantine-color-scheme]`

### 更多用法

更多用法请查看官方文档 <https://mantine.dev/styles/vanilla-extract/>
