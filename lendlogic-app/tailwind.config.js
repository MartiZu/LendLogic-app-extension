/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    minHeight: {
      "card-height": "520px",
    },
    minWidth: {
      "button-width": "230px",
    },
    maxWidth: {
      "card-width": "800px",
    },
    extend: {
      animation: {
        slideout: "slideleft 0.5s ease 0s 1 normal forwards",
        slidein: "slideright 0.5s ease 0s 1 normal forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "off-white": "#fcfaf9",
        "purple-accent": "#645eb0",
        "text-grey": "#5e5e5e",
      },
      boxShadow: {
        card: "0px 4px 6px 2px #8a84e2",
        button: "0px 4px 4px 0px rgba(0, 0, 0, 25%)",
      },
      keyframes: {
        slideleft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-250px)" },
        },
        slideright: {
          "0%": { opacity: 0, transform: "translateX(250px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
