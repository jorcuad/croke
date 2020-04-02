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
        '2full': '200%',
      },
      height: {
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
      },
    }
  },
  variants: {},
  plugins: []
}
