const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        accent: 'hsl(var(--accent))',
        success: 'hsl(var(--success))',
        destructive: 'hsl(var(--destructive))',
        warning: 'hsl(var(--warning))',
        hover: 'hsl(var(--hover))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [
    require('tailwindcss-react-aria-components'),
    require('tailwindcss-animated'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
};