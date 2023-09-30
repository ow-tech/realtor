import React from 'react'
import {Grid, Box, Typography} from '@mui/material'

function ObjectComponent() {
  return (
    <>
     
    <Box className="InfoIconDescripBottom">
        <Grid container direction='row' spacing={1}>
            <Grid item xs={4}>
                <Typography variant="AlwynNewRoundedRegular14" >Freehold ownership:</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="AlwynNewRoundedRegular14" >Absolute ownership and the land it is built upon, the property can be sold, leased or used at the owner’s will.</Typography>
            </Grid>

        </Grid>
        <Grid container direction='row'spacing={1} my={1}>
        <Grid item xs={4}>
                <Typography variant="AlwynNewRoundedRegular14" >leasehold ownership:</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="AlwynNewRoundedRegular14" >Grant the rights of a property for a fixed term, with a maximum of 99 years. After the end of the lease period, the ownership goes back to the freeholder if the lease is not renewed.</Typography>
            </Grid>

        </Grid>
    </Box>
 
    </>
  )
}

export default ObjectComponent