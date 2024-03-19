/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f4f7fb',
          '100': '#e7eef7',
          '200': '#cadbed',
          '300': '#9cbedd',
          '400': '#679bc9',
          '500': '#447fb3',
          '600': '#336699',
          '700': '#2a517a',
          '800': '#264666',
          '900': '#243c56',
          '950': '#182739',
        },
        'secondary': {
          '50': '#fef1f7',
          '100': '#fde6f2',
          '200': '#fdcde6',
          '300': '#fd99cb',
          '400': '#fb6bb0',
          '500': '#f53f91',
          '600': '#e41e6d',
          '700': '#c70f54',
          '800': '#a41046',
          '900': '#89123d',
          '950': '#54031f',
        },
      }
    }
  },
  plugins: [
    
  ],
}

