/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-purple': 'var(--Linear, linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%))',
      },
    },
  },
  plugins: [require('daisyui'),],
}

