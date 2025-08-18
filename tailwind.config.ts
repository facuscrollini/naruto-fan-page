import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajusta según tu proyecto
  ],
  theme: {
    extend: {},
  },
  plugins: [animate], // activamos tailwindcss-animate
};

export default config;