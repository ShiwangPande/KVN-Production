/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {},
    },
    plugins: [require("@nextui-org/react"),
    require('flowbite/plugin')
    ],
  }