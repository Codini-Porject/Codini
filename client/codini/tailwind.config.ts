import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightseagreen: "#49bbbd",
        mediumslateblue: "#545ae8",
        lightslategray: {
          "100": "#83839a",
          "200": "rgba(131, 131, 154, 0.6)",
        },
        lightsteelblue: "#b2b3cf",
        slategray: {
          "100": "#696984",
          "200": "#626381",
        },
        gray: {
          "100": "#252641",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        lightskyblue: "#9dccff",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkslateblue: "#171b41",
        dimgray: "#5b5b5b",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        "41xl": "60px",
        "3xl": "22px",
        "3xl-1": "22.1px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "3xl": "22px",
      xl: "20px",
      "7xl": "26px",
      "13xl": "32px",
      lg: "18px",
      "5xl": "24px",
      "11xl": "30px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  plugins: [],
};
export default config;
