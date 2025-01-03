/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28e98c',
        secondary: '#000000',
        tertiary: '#575757',
        icons: '#999',
        bg: '#202020',
        text: '#ffffff',
      },
    },
  },
  plugins: [],
}
