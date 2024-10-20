import tailwindPresetMantine from 'tailwind-preset-mantine'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        toolbar: '56px',
        sidebar: '300px',
      },
      colors: {
        dimmed: 'var(--mantine-color-dimmed)',
      },
      textColor: {
        default: 'var(--mantine-color-default-color)',
      },
      backgroundColor: {
        default: 'var(--mantine-color-default)',
      },
      borderColor: {
        default: 'var(--mantine-color-default-border)',
      },
    },
  },
  plugins: [],
  presets: [tailwindPresetMantine],
}
