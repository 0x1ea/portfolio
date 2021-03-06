/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.025",
      },
    },
  },
  plugins: [],
}
