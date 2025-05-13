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
        iconColor : "#854d0e",
        hoverColor: "#eab308",
        textColor:"#854d0e",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container:{
        center: true,
        padding:{
              DEFAULT : "38px",
              sm: "3rem,",
              lg:"97px",
              xl:"112px",
              "2xl": "120px"
        }
      }
    },
  },
  plugins: [],
};
export default config;
