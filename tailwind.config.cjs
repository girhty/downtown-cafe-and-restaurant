/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        downtown: {
          dark: '#0d0d0f',
          surface: '#17171c',
          card: '#1e1e26',
          border: 'rgba(255, 255, 255, 0.08)',
          gold: '#dfa65b',
          'gold-light': '#f5c88b',
          'gold-dark': '#9b6c2d',
          sand: '#e8dec8',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(223, 166, 91, 0.18) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}