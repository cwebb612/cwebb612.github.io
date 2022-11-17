import { FC } from 'react';
import { AppBar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const PageHeader: FC = () => {

  return (
    <AppBar sx={{ flexDirection: 'row' }}>
      <Box>
        insert logo/github/linkedin profiles
      </Box>
      <Box sx={{
        fontFamily: 'Arial',
      }}>
        <Typography variant="h4" > Charlie Webb </Typography>
      </Box>
    </AppBar>
  )
}

export default PageHeader;
