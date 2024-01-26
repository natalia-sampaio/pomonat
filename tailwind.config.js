/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'red': 'F87070',
        'blue': '70F3F8',
        'purple': 'D881F8',
        'background': '1E213F',
        'surface': '161932',
        'modal-bg': 'FFFFFF',
        'modal-surface': 'EFF1FA',
        'text': 'D7E0FF',
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

