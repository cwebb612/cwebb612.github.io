import { FC } from 'react';
import Box from '@mui/material/Box';
import headshot from '../assets/Headshots/ChuckHead-2.jpg';
import Typography from '@mui/material/Typography';
import NavBar from './navigationBar'



const PageBody: FC = () => {

  return (
    <Box>
      <Box
      sx={{
        position: 'absolute',
        top: '75%',
        left: '25%',
        flexDirection: 'row',
        zIndex: 1,
      }}
      >
        <NavBar/>
      </Box>
    </Box>
  )
}

export default PageBody;
