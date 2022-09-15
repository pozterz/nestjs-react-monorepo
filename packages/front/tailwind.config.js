module.exports = {
  presets: [require('../../theme.preset.js')],
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      keyframes: true,
      FontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        160: '40rem',
      },
      height: {
        '85vh': '85vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
