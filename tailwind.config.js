/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                herobanner: '0px 12px 18px rgba(23, 23, 37, 0.04);',
            },
            screens: {
                xs: '320px',
                sm: '375px',
            },
        },
    },
    plugins: [],
};
