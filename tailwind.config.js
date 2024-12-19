/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: 'rgb(0, 42, 141)', // Azul personalizado
        },
        orange: {
          500: 'rgb(255, 120, 0)', // Naranja principal
          600: 'rgb(230, 100, 0)', // Naranja más oscuro para hover
        },
        gray: {
          200: '#f5f5f5', // Gris claro para texto o fondos secundarios
          700: '#4a4a4a', // Gris oscuro para texto
        },
        
      },
    },
  },
  plugins: [],
};
