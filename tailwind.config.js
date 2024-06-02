/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "p-orange": "#FF5555",
        "p-yellow": "#FDE598",
      },
      width: {
        106: "550px",
        116: "620px",
      },
      height: {
        90: "360px",
        128: "551px",
      },
      inset: {
        42: "10.7rem",
        58: "14.5rem",
        69: "17.4rem",
        13: "3.35rem",
      },
      borderRadius: {
        ellipse: "50%",
      },
      rotate: {
        15: "15deg",
        20: "-20deg",
        30: "30deg",
        33: "33deg",
        60: "60deg",
      },
    },
  },
  plugins: [],
};
