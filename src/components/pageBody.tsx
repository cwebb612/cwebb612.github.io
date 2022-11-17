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
        top: '30%',
        left: '10%',
        flexDirection: 'row',
      }}
      >
        <img src={headshot} style={{ width: '25%', height: '25%' }}/>
        <Typography variant="h6"> hey man heres the cite </Typography>
        <NavBar/>
      </Box>
    </Box>
  )
}

export default PageBody;
