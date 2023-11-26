/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

