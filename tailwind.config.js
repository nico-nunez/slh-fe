/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'winter-blue-100': '#86feff',
                'winter-blue-200': '#8de2ff',
                'winter-blue-300': '#c3f9ff',
                'winter-blue-400': '#00d9e6',
                'winter-blue-500': '#00e4ff',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
