/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      minHeight: {
        '800px': '800px',
      },
      screens: {
        'Msm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}

