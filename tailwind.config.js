/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4fe',
          100: '#dd05ff',
          500: '#1e3a8a',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#0b0f19',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        bsebRed: {
          500: '#dc2626',
          600: '#b91c1c',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
