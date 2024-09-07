export const trimEnd = (str: string, c = '\\s') =>
  str.replace(new RegExp(`^(.*?)([${c}]*)$`), '$1')
