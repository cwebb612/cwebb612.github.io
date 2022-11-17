import { FC } from 'react';
import { Stack, Divider, Link, Box } from '@mui/material';


const NavBar: FC = () => {

  return (
    <Stack width='100%' direction="row" spacing={2}>
      <Link href='#' underline="none">
        Resume/CV
     </Link>
     <Divider orientation="vertical" flexItem/>
     <Link href='#' underline="none">
       Github
      </Link>
      <Divider orientation="vertical" flexItem/>
      <Link href='https://www.linkedin.com/in/webb-charles/' underline="none" target="_blank">
       LinkedIn
      </Link>
     <Divider orientation="vertical" flexItem/>
      <Box>Photos trigger</Box>
     <Divider orientation="vertical" flexItem/>
      <Box> Contact form </Box>

    </Stack>
  )
}

export default NavBar;
