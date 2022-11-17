import { FC } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import logo from './logo.svg';
import theme from './config/theme';
import './App.css';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default App;
