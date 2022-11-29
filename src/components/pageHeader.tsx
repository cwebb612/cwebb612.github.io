import { FC } from 'react';
import { AppBar, Box, Link, SpeedDial, SpeedDialIcon } from '@mui/material';
import nameCard from '../assets/NameCard.png';
import gitHub from '../assets/GitHubLogo.png';
import linkedIn from '../assets/LinkedInLogo.png';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import NightlightRoundRoundedIcon from '@mui/icons-material/NightlightRoundRounded';

const themeToggles = [
  { icon: <LightbulbRoundedIcon />, name: 'Light' },
  { icon: <NightlightRoundRoundedIcon />, name: 'Dark' },
]

const PageHeader: FC = () => {

  return (
    <AppBar sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ px: 2.5 }}>
       <Link href='https://github.com/cwebb612' underline="none" target="_blank" >
         <img src={ gitHub } width='30px' />
        </Link>
        <Link href='https://www.linkedin.com/in/webb-charles/' underline="none" target="_blank" sx={{ px: 2 }} >
          <img src={ linkedIn } width='35px' />
        </Link>
      </Box>
      <Box
        component="img"
        sx={{ width:'700px', height:'80px', pt: 0 }}
        alt="Charlie Webb"
        src={ nameCard }
      />
    <SpeedDial sx={{ px: 3}}>

      <SettingsRoundedIcon/>
    </SpeedDial>
    </AppBar>
  )
}

export default PageHeader;
