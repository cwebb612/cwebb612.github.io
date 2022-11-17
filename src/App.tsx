import { FC } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import PageHeader from './components/pageHeader';
import PageBody from './components/pageBody';
import img1 from './assets/Other-RP/RP-54.jpg';

import theme from './config/theme';
import './App.css';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageHeader/>
       {/* Background of page */}
      <Box
        sx={{
          zIndex: -1,
          position: 'absolute'
        }}
      >
      <img src={img1} width='100%'/>
      </Box>
      <PageBody/>
    </ThemeProvider>
  );
}

export default App;
