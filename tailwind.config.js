/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        khaki: {
          50:  '#FAF7F0',
          100: '#F2ECD8',
          200: '#E8DCC0',
          300: '#D4C49A',
          400: '#C0A870',
          500: '#A88C50',
          600: '#8C7240',
          700: '#6B5530',
          800: '#4A3820',
          900: '#2E2010',
        },
        rust: {
          400: '#C0622A',
          500: '#A0481A',
          600: '#803010',
        },
        espresso: {
          800: '#F2ECD8',
          900: '#FAF7F0',
        },
        parchment: '#1C1008',
        sand: '#5C3A18',
        bronze: '#8B6914',
        leather: '#6B3A1F',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
