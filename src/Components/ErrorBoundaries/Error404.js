import React from 'react'
import CustomButton from "../Button/CustomButton";
import { Grid, Typography ,Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonLeftArrow } from "../../Assets/SVG/Common/CommonSvgs";

function Error404() {
    const navigate = useNavigate();

    const goToPageOnClick = () => {
      navigate("/");
      navigate(0)
    };
  return (
    <Box className='errorBoundaryWrapper'>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <Typography variant="GothamBlack20Bold">
            404! Page not found
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <CustomButton onClick={goToPageOnClick} text="Back to home" leftIcon={<ButtonLeftArrow />}/>
        </Grid>
        
      </Grid>
    </Box>
  )
}

export default Error404