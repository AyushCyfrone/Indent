/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif'],
      'mono': ['ui-monospace'],
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

