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
      boxShadow: {
        '3xl': '50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A'
      },
      /* colors: {
        'primary': '#1E213F',
        'primary-surface': '#161932',
        'on-primary': '#D7E0FF',
        'accent-red': '#F87070',
        'accent-blue': '#70F3F8',
        'accent-purple': '#D881F8',
        'on-accent': '#1E213F',
        'modal': '#FFFFFF',
        'modal-surface': '#EFF1FA',
      }, */
      fontFamily: {
        'kumbh-sans': ['Kumbh\\ Sans', 'sans-serif'],
        'roboto-slab': ['Roboto\\ Slab', 'serif'],
        'space-mono': ['Space\\ Mono', 'monospace']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        redTheme: {
          "primary": "#F87070",
          "secondary": "#1E213F",
          "base-100": "#161932",
          "accent": "#FFF",
        },
        blueTheme: {
          "primary": "#70F3F8",
          "secondary": "#1E213F",
          "base-100": "#161932",
          "accent": "#FFF",
        },
        purpleTheme: {
          "primary": "#D881F8",
          "secondary": "#1E213F",
          "base-100": "#161932",
          "accent": "#FFF",
        }
      }
    ]
  }
}