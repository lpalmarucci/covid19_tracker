module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg'
      },
      animation: {
        'slideUp': 'slideUp .3s linear forwards',
        'slideDown': 'slideDown .3s linear forwards'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translate(-50%,-30%)', opacity: '0' },
          '100%': { transform: 'translate(-50%,-50%)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translate(-50%,-50%)', opacity: '1' },
          '100%': { transform: 'translate(-50%,-30%)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}