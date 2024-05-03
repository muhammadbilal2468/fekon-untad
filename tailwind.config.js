/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        md: "600px",
        lg: "950px",
        xl: "1080px",
        "2xl": "1440px",
      },
      colors: {
        primary: "#00627A",
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        // Tambahkan z-index yang lebih tinggi sesuai kebutuhan Anda
      },
    },
  },
  plugins: [require("flowbite/plugin", "daisyui")],
};
