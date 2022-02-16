const spacing = (multiply: number) => (multiply || 1) * 4

const colors = {
  primary: {
    900: '#3c1885',
    800: '#4d2494',
    700: '#582a9c',
    600: '#6432a5',
    500: '#6c38ab',
    400: '#8255b8',
    300: '#9773c4',
    200: '#b49cd5',
    100: '#d2c3e5',
    50: '#ede7f4'
  },
  secondary: {
    900: '#201a26',
    800: '#413a48',
    700: '#605967',
    600: '#746c7b',
    500: '#9d95a5',
    400: '#bcb4c5',
    300: '#e0d8e9',
    200: '#f0e7f8',
    100: '#f8f0ff',
    50: '#fff6ff'
  }
}

const exports = {
  colors,
  spacing
}

export default exports
