import  {Box, Typography, Button} from '@mui/material';
import React from 'react';
export default function HeroSection() {
  return (
    <Box className='box'
    sx={{width:'60%',
        height:'80vh',
        margin:'20px 20% 0px 100px',
    }}
    >
      <Typography variant='h2'
      sx={{fontWeight:'700', color:'white'
      }}
      >Redefining Mobile And Web Application Development Solutions</Typography>
      <Typography variant='h6'
      sx={{ color:'white',
        marginTop:'20px',
        marginBottom:'20px',
      }}
      >A Web and Mobile Application Company specializing in business solution that help business improve their processes.</Typography>
      <Button variant="contained" sx={{
        '&:hover':{width:'120px', height:'6vh',},
      }}>Let's Talk</Button>
      <Box display={'flex'} marginTop={'50px'} marginBottom={'50px'} width={'50%'} justifyContent={'space-between'}><Typography variant='subtitle1'
      sx={{color:'white',
        fontWeight:'500',
        marginTop:'20',
        marginBottom:'20',
      }}
      >Trusted By:</Typography>
        <img width={'130px'} height={'45px'}  src="Images/nesma.png" alt="logo" />
        <img width={'130px'} height={'45px'} src="Images/mygroser.png" alt="logo" />
      </Box>
    </Box>
  );
}
