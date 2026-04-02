export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fcfaf8',    // Very soft elegant off-white / beige
          100: '#f3f0ea',   // Creamy beige for badges and hovers
          200: '#e5e1d8',
          300: '#cfc9be',
          400: '#a39d93',
          500: '#7a756d',
          600: '#5c546b',   // Transitioning into the cool dark typography
          700: '#2e253e',   // Luxurious deep indigo borders & hovers
          800: '#181223',   // Deep dark card background
          900: '#0b0812',   // Beautifully rich deep app background
          950: '#06040a',
        }
      }
    },
  },
  plugins: [],
}