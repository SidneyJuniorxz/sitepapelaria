/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pink-main': '#FF1493', // Rosa Pink
                'pink-baby': '#FFB6C1', // Rosa Bebê
                'orange-burnt': '#CC5500', // Laranja Queimado (Ajustado) - Originalmente solicitado como "Laranja queimado"
                'green-mint': '#98FF98', // Verde-menta
                'purple-light': '#E6E6FA', // Roxo Claro
            },
            fontFamily: {
                'rounded': ['"Nunito"', 'sans-serif'],
                'base': ['"Poppins"', 'sans-serif'],
            },
            borderRadius: {
                'cute': '2rem',
            }
        },
    },
    plugins: [],
}
