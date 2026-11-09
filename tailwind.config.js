/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kepc: {
          navy: '#142B49',
          'navy-deep': '#0B1B30',
          'navy-light': '#1e3c66',
          offwhite: '#F7F8FA',
          red: '#C83B43',
          'red-hover': '#b02f37',
          charcoal: '#333B45',
          muted: '#64748B',
          border: '#E2E8F0',
          cream: '#F4EFEA',
          lavender: '#E9ECF5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(11, 27, 48, 0.08)',
        'editorial': '0 20px 40px -15px rgba(11, 27, 48, 0.15)',
        'elevated': '0 25px 50px -12px rgba(11, 27, 48, 0.25)',
      }
    },
  },
  plugins: [],
}
