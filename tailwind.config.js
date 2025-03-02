/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        primary: "#1226AA",
        secondary: "#ED5F98",
        accent: "#FFC216",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap')",
        "body": {
          fontFamily: "var(--font-display)",
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
          "@apply text-base leading-relaxed": {},
        },
      });
    }
  ],
};
