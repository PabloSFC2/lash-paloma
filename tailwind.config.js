/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite automaticamente procura index.html na pasta public
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nude-light': '#F5E6D3',
        'nude-dark': '#D4B89B',
        'golden-light': '#FCD982',
        'golden-dark': '#E0AC54',
        'golden-darker': '#C7903A',
        'white-pure': '#FFFFFF',
        'gray-text': '#5C5C5C',
        'gray-800': '#2D3748',
      },
      fontFamily: {
        // ALTEIRADO AQUI PARA POPPINS
        'sans': ['Poppins', 'sans-serif'], // Poppins como a fonte sans-serif principal
        'serif': ['Playfair Display', 'serif'], // Mantenha sua fonte serif se estiver usando
      },
      // ... (suas keyframes e animations existentes)
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Se você não usa mais as animações de About.jsx, remova-as aqui para limpeza:
        // 'fade-in-right': 'fadeInRight 1s ease-out forwards',
        // 'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        // 'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        // Se você não usa mais as animações de About.jsx, remova-as aqui para limpeza:
        // 'fade-in-right': 'fadeInRight 1s ease-out forwards',
        // 'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        // 'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}