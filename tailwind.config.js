/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lacquer: ['Lacquer', 'system-ui'],  
        'roboto-condensed': ['"Roboto Condensed"', 'serif'],
      },
      animation: {
        bounce: "bounce 0.5s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    extend: {},
  },
},
  plugins: [],
}

