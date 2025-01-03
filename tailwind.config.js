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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#f3f4f6',
        lightPrimary: '#f2f3f5',

        title: '#303336',
        paragraph: '#303336',
        lightParagraph: '#ed0909',

        tagsBg: '#f3f4f6',

        secondary: '#2463eb',
        tertiary: '#575757',
      },
    },
  },
  plugins: [],
}
