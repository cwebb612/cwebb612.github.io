import { FC } from 'react';
import { Stack, Divider, Link, Box, Card, Button } from '@mui/material';
import { readBuilderProgram } from 'typescript';


const NavBar: FC = () => {

  const onPhotos = () => {
    console.log('photos')
  };

  const onContact = () => {
    console.log('contact form')
  };

  return (
    <Card sx={{ background: 'transparent' }}>
      <Stack width='100%' direction="row" spacing={2} sx={{ px: 4, py: 2 }} bgcolor='White'>
        <Button>
        <Link href='https://github.com/cwebb612/cwebb612.github.io/blob/main/src/assets/Charles%20Webb%20Resume.pdf' underline="none" target="_blank">
          Resume/CV
        </Link>
      </Button>
      <Divider orientation="vertical" flexItem/>
      <Button>
      <Link href='https://github.com/cwebb612' underline="none" target="_blank">
         Github
        </Link>
        </Button>
        <Divider orientation="vertical" flexItem/>
        <Button>
         <Link href='https://www.linkedin.com/in/webb-charles/' underline="none" target="_blank">
          LinkedIn
         </Link>
        </Button>
      <Divider orientation="vertical" flexItem/>
       <Button
        onClick={() => {
          onPhotos()
        }}
       >Photos</Button>
      <Divider orientation="vertical" flexItem/>
        <Button
            onClick={() => {
               onContact()
            }}>
          <Box> Contact form </Box>
       </Button>
     </Stack>
    </Card>
  )
}

export default NavBar;
