import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Logo from "../../../Assets/SVG/Logo.js";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import useMediaQuery from "@mui/material/useMediaQuery";
// import TermsAndPolicy from "../TermsAndPolicy/TermsAndPolicy";

function SignIn() {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    true, // Hover state for button at index 0
    false, // Hover state for button at index 1
  ]);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const handleMouseEvent = (index) => {
    setExclusivesButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };

  return (
    <Box className="authComponentsWrapper">
      <Box className="welcomeTextWrapper">
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="DubaiRegular18">Welcome to</Typography>
          <Box className="alignBoxSignIn">
            <Link to="/">
              <Box className="logoInnerBoxSignIn">
              <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: 'white',
                      textDecoration: "none",
                    }}
                  >
                    Realtor
                  </Typography>
              </Box>
            </Link>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <Typography variant="DubaiRegular18">
              Log in with your account to continue
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box className="signInButtonWrapper">
        <Grid
          container
          justifyContent={isSmallScreen ? "center" : "space-around"}
          alignItems={isSmallScreen ? "center" : "stretch"}
          spacing={1}
        >
          <Grid item xs={6}>
            <Link to="/login"  className="authLinks">
              <CustomButton
                text=" Login   "
                rightIcon={<ButtonRightArrow />}
                onMouseEnter={() => handleMouseEvent(0)}
                onMouseLeave={() => handleMouseEvent(0)}
                dark={exclusivesButtonHovered[0]}
                variant="outlined"
                customClassName="signInButton"
              />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/register"  className="authLinks">
              <CustomButton
                text="Sign up"
                rightIcon={<ButtonRightArrow />}
                onMouseEnter={() => handleMouseEvent(1)}
                onMouseLeave={() => handleMouseEvent(1)}
                dark={exclusivesButtonHovered[1]}
                variant="outlined"
                customClassName="signInButton"
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
      {/* <Box>
      <TermsAndPolicy/>

      </Box> */}
    </Box>
  );
}

export default SignIn;
