import { createTheme } from '@mui/material/styles';
import { green, blue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[100],
    },
    error: {
      main: red[500],
    },
  },
})

export default theme;
