module.exports = {
  theme: {
    zIndex: {
      '-1': '-1',
      '-2': '-3',
      '-3': '-3',
    },
    colors: {
      croke: {
        white: '#ffffff',
        black: '#000000',
        purple: '#412854',
        green: '#68da23',
      }
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(104,218,35,0.4)',
      focus: '0 0 0 3px rgba(104,218,35,0.4)',
      'none': 'none',
    },
    extend: {
      width: {
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '2full': '200%',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '1/4': '25%',
        '1/3': '33%',
      },
    }
  },
  variants: {},
  plugins: []
}
