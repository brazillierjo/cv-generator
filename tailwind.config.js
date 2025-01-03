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
                primary: '#f3f4f6',

                title: '#303336',
                paragraph: '#303336',
                lightParagraph: '#575757',

                tagsBg: '#f3f4f6',

                secondary: '#2463eb',
                tertiary: '#575757',
            },
        },
    },
    plugins: [],
}
