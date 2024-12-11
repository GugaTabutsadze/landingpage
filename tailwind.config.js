/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightbisque: "#ffecb9",
        morebisque: "#e9c37c",
        black: "#000103",
        lightBlack: "#292A32",
        lightGreen: "#B9FF66",
      },
      boxShadow: {
        bottom: "0px 5px 0px 0px #191A23",
      },
    },
  },
  plugins: [],
}

