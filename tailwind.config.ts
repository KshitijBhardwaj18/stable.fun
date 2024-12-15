import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-grid': `
                          linear-gradient(to right, black 0.5px, transparent 1px), 
                          linear-gradient(to bottom, black 0.5px, transparent 1px)`,
      },
      colors: {
        'stable-yellow': 'rgb(228 255 63)',
      },
    },
  },
  plugins: [],
} satisfies Config;
