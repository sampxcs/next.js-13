/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        'light-black': '#16181c'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(0.5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        marquee: {
          '0%': { left: '0%' },
          '100%': { left: '-100%' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out forwards',
        fadeInDown: 'fadeInDown .3s ease-in-out forwards',
        fadeInUp: 'fadeInUp .3s ease-in-out forwards',
        marquee: 'marquee 16s linear infinite'
      }
    }
  },
  darkMode: ['class'],
  plugins: []
}
