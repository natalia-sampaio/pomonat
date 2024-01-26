/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#1E213F',
        'primary-surface': '#161932',
        'on-primary': '#D7E0FF',
        'secondary-red': '#F87070',
        'secondary-blue': '#70F3F8',
        'secondary-purple': '#D881F8',
        'on-secondary': '#1E213F',
        'modal': '#FFFFFF',
        'modal-surface': '#EFF1FA',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
        roboto: ['Roboto Slab', 'serif'],
        space: ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

