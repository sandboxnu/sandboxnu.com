/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'sandbox-blue': '#2a426b',
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
