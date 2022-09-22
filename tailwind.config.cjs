/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
  daisyui: {
   styled: true,
   themes: ["wireframe"],
   base: true,
   utils: false,
   logs: true,
   rtl: false,
   prefix: "",
   darkTheme: "dark",
 },
  theme: {
    extend: {},
  },
};
