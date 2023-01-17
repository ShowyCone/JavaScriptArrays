/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // custom user configuration
      bgGradientDeg: {
        180: '180deg',
      },
      colors: {
        skyGray: '#c3d1e4',
        skyGray2: '#dde7f3',
        skyGray3: '#d4e0ed',
        skyGray4: '#dde7f3',
      },
      fontFamily: {
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        'autoF': 'repeat(auto-fill, minmax(250px, 1fr))'
      },
      boxShadow: {
        'card': 'inset 5px 5px 5px #0000000d, inset -5px -5px 5px #ffffff80, 5px 5px 5px #0000000d, -5px -5px 5px #ffffff80'
        
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          ),
        }
      )
    }),
  ],
}
