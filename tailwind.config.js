/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./nuxt.config.{js}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('~/assets/images/image@2x.png')",
        'star': "url('~/assets/icons/star.svg')",
        'star-inactive': "url('~/assets/icons/star-inactive.svg')",
        'bannerBgOne': "url('~/assets/images/image.png')",
        'angle-down': "url('~/assets/icons/angle-down-grey.svg')",
        'angle-up': "url('~/assets/icons/angle-down-grey-dark.svg')",
      },
      colors: {
        'overlay': 'rgba(0,0,0,.5)',
        'grey': '#4A4A4A',
        'light-grey': '#8A8A8A',
        'light-grey2': '#dddddd',
        'light-grey3': '#eeeeee',
        'dark-grey': '#2D2D2D',
        'grad-1': '#DCDCDC',
        'grad-2': '#f4f4f4',
        'grad-3': '#E28703',
        'grad-4': '#DD9B2F',
        'grad-5': '#07053F',
        'grad-6': '#0988A3',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': '600px',
          'md': '728px',
          'lg': '984px',
          'xl': '1140px',
          '2xl': '1140px',
        }
      }
    },
    fontFamily: {
      'primary': ['IBM Plex Sans', 'sans-serif']
    },
    fontSize: {
      'xs2': '.81rem',
    }
  },
  plugins: [],
}