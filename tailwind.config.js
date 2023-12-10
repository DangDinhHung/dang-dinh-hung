/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'xs': { 'min': '375px', 'max': '639px' },
            'sm': { 'min': '640px', 'max': '767px' },
            'md': { 'min': '768px', 'max': '1023px' },
            'lg': { 'min': '1024px', 'max': '1279px' },
            'xl': { 'min': '1280px', 'max': '1535px' },
            '2xl': { 'min': '1536px' },
        },
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                '2': 'repeat(2, minmax(60px, 273px))',

                'footer': '200px minmax(900px, 1fr) 100px',
            }
        },
    },
    plugins: [],
}