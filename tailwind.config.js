/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===================================
        // SPARIX MOCHA PALETTE
        // ===================================
        ivory:    '#EDE6DA',
        biscotti: '#C7A37E',
        wood:     '#9E7655',
        linen:    '#B59F8C',
        espresso: '#644736',
        cream:    '#F5F0E8',
        mist:     '#D6CCB8',
        bark:     '#4A2E1A',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
