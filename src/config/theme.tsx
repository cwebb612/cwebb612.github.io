import { createTheme } from '@mui/material/styles';
import { green, blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(15, 10, 29, 1)',
    },
    secondary: {
      main: 'rgba(239, 245, 226, 1)'
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme;
