/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './*html'
  ],

  theme: {

    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      spacing: {
        '7/10': '70%',
        '120': '480px',
        '144': '576px',
        '2/5': '40%',

      }
    },
    maxWidth: {
      'mb': '375px',
      // => @media (min-width: 640px) { ... }

    },

    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },

  },
  plugins: [require("daisyui")],
}
