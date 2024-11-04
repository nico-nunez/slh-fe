/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: ['winter'],
    },
    plugins: [
        'prettier-plugin-tailwindcss',
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
};
