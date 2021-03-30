module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,vue}', './components/**/*.{js,ts,jsx,tsx,vue}'],
  // purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#666',
          200: '#464646',
          300: '#363636',
          500: '#1e1e1e',
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
