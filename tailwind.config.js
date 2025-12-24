/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3B2C',
        secondary: '#7C8975',
        tertiary: '#8A9B8C',
        'gray-warm': '#E5E5E5',
        'gray-light': '#F5F5F5',
        'gray-medium': '#C4C4C4',
        'instagram': '#E1306C',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}