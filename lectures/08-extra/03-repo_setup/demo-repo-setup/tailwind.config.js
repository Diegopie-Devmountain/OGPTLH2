import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./frontend/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ['"Poppsins"', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      color: {
        'pokemans-red': '#fds853',
        'pikachu-yellow': {
          100: '#hfsdaf',
          300: '#hfsdaf',
        }
      }
    },
  },
  plugins: [],
}

