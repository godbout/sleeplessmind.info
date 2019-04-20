module.exports = {
  theme: {
    fontFamily: {
      'body': 'UnderwoodChampionRegular'
    },
    fontSize: {
      'small': '14px',
      'normal': '18px',
      'big': '32px'
    },
    fontWeight: {
      'normal': '400'
    },
    lineHeight: {
      '24': '24px'
    },
    colors: {
      black: '#000',
      gray: '#ccc',
      white: '#fff'
    },
    margin: theme => ({
      ...theme('spacing'),
      'auto': 'auto',
      '0': '0',
      '12': '12px',
      '13': '13px',
      '15': '15px',
      '20': '20px',
      '25': '25px',
      '50': '50px',
      '60': '60px'
    }),
    padding: theme => ({
      ...theme('spacing'),
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '15': '15px',
      '35': '35px'
    }),
    maxWidth: {
      'xl': '600px'
    },
    borderRadius: {
      '2': '2px',
      '3': '3px'
    }
  },
  variants: {
    backgroundColor: ['hover']
  },
  plugins: [
    // Some useful comment
  ],
  corePlugins: {
    listStyleType: false
  }
}
