/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'tradewind': {
          '50': '#f2fbfa',
          '100': '#d4f3f0',
          '200': '#a8e7e2',
          '300': '#75d3ce',
          '400': '#45b3b1', // main
          '500': '#2f9d9d',
          '600': '#237c7e',
          '700': '#206365',
          '800': '#1e4f51',
          '900': '#1d4244',
          '950': '#0b2628',
        },
        'sunshade': {
          '50': '#fff7eb',
          '100': '#ffeac6',
          '200': '#ffd288',
          '300': '#ffb44a',
          '400': '#ffa030', // sub
          '500': '#f97307',
          '600': '#dd5002',
          '700': '#b73306',
          '800': '#94270c',
          '900': '#7a200d',
          '950': '#460e02',
        },
      },
    },
    plugins: [],
  },
}