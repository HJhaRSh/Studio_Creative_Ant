/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
      },
      fontFamily: {
        heading: ["var(--font-clash-display)", "var(--font-monument)", "var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
