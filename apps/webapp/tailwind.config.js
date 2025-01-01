/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', '../../packages/ui/**/*.tsx'],
  theme: {
    extend: {},
  },
  presets: [require('nativewind/preset')],
  plugins: [],
};
