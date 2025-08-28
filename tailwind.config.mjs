/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        "primary-light": "#22222220",
        secondary: "#707070",
        "secondary-light": "#70707020",
      },
    },
  },
  plugins: [],
};
