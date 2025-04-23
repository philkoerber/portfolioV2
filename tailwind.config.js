/** @type {import('tailwindcss').Config} */

//https://coolors.co/211c1f-62b6cb-eedfd2



module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        verydark: "#211C1F",
        backgroundone: "#EE6D78",
        antique: "#FCEBDA"
      }
    },
  },
  plugins: [],
}
