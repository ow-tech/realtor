import React from "react";
import { Box, Grid, Container, Typography, Link } from "@mui/material";
import Carousel from "../../../Components/Carousel/Carousel";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import BottomDetailsSection from "./BottomDetailsSection/BottomDetailsSection";
import { devlopmentImages } from "../../../Constants/ConstantValues";

function LandingPageNewDevelopmentSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Container disableGutters={true} className="newDevelopmentContainer">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={7}
        pb={5}
      >
        <Grid item xs={6} sm={3} md={3} mb={2} order={{ xs: 2, sm: 1 }}>
          <Typography variant="GothamBlack45">
            Discover New Developments
          </Typography>

          <Link href="/comingsoon">
            <CustomButton
              text="Learn More"
              rightIcon={<ButtonRightArrow />}
              fullWidth={false}
              customClassName={"learnMoreBtnLanding"}
              textIconSpacingClass={1.4}
              typographyVariant="AlwynNewRoundedRegular18"
            />
          </Link>
        </Grid>

        <Grid item xs={12} sm={7} md={7} order={{ xs: 1, sm: 2 }}>
          <Box position="relative">
            <Box className="newDevelopmentOpacity"></Box>
            <BottomDetailsSection
              community={devlopmentImages[activeStep].community}
              price={devlopmentImages[activeStep].price}
              sizes={devlopmentImages[activeStep].sizes}
            />
            <Carousel
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              images={devlopmentImages}
              width={680}
              height={400}
              // oldCarousel
              autoScroll
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPageNewDevelopmentSection;
