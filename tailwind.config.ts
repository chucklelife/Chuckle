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
        primary: "#290845",
        green: "#71FFD2",
        yellow: "#FCFF68",
        pink: "#D5A2FE",
      },

      fontFamily: {
        ericaOne: ["var(--font-erica-one)"],
      },
      boxShadow: {
        primary: "0px 4px 16px 0px #29084540",
      },
    },
  },
  plugins: [],
};
export default config;
