import React from "react";
import { Box, Grid, Container, Typography, Link } from "@mui/material";
import Carousel from "../../../Components/Carousel/Carousel";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import BottomDetailsSection from "./BottomDetailsSection/BottomDetailsSection";
import { citiesImages } from "../../../Constants/ConstantValues";

const LandingPageInternationalPropertySection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <Container disableGutters={true} className="internationalPropertyContainer">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={7}
        pb={5}
      >
        <Grid item xs={12} sm={7} md={7}>
          <Box position="relative">
            <Box className="newDevelopmentOpacity"></Box>
            <BottomDetailsSection
              city={citiesImages[activeStep].city}
              country={citiesImages[activeStep].country}
              countryFlag={citiesImages[activeStep].countryFlag}
            />
            <Carousel
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              images={citiesImages}
              dark={false}
              width={680}
              height={400}
              // oldCarousel
              autoScroll
            />
          </Box>
        </Grid>
        <Grid
          item
          className="internationalPropertyTypography"
          xs={12}
          sm={4}
          md={4}
          mt={2}
        >
          <Typography variant="GothamBlack45" color="white">
            Explore our International Properties
          </Typography>
          <Link href="/comingsoon" className="linksNoTextDecorationBlackColor">
            <CustomButton
              dark={false}
              text="Learn More"
              rightIcon={<ButtonRightArrow />}
              fullWidth={false}
              customClassName={"learnMoreBtnLanding "}
              textIconSpacingClass={1.4}
              typographyVariant="AlwynNewRoundedRegular18"
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPageInternationalPropertySection;
