import { Box, Stack, Typography,Divider } from '@mui/material'
import React from 'react'

function TermsAndPolicy() {
  return (
    <Box className='privacyWrapper'>
<Stack
  direction="row"
  divider={<Divider orientation="vertical" color='white'flexItem />}
  spacing={2}
>
  <Typography variant='DubaiRegular18'>Terms of Use</Typography>
  <Typography variant='DubaiRegular18'>Privacy Policy</Typography>
 
</Stack>

    </Box>
  )
}

export default TermsAndPolicy