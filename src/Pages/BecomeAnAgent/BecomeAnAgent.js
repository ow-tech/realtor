import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import {
  becomeAnAgentStepsSectionData,
  becomeAgentQuestion,
} from "../../Constants/StaticPagesConstants";
import { isEqual } from "lodash";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { LogoHeadingComponent } from "../../Components/LogoHeadingComponent/LogoHeadingComponent";
import { RenderMultiParagraph } from "../../Components/RenderStaticPages/RenderMultiParagraph/RenderMultiParagraph";
import { RenderBulletPoints } from "../../Components/RenderStaticPages/RenderBulletPoints/RenderBulletPoints";
import { cdnPath } from "../../Constants/StaticPagesConstants";

function BecomeAnAgent() {
  const sect = becomeAgentQuestion;
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid
        container
        // rowGap={10}
        direction={"column"}
        className="landingPageSearch"
      >
        <BackgroundImageAndTextWithGradientBackground
          customHeroClass={"baa-hero"}
          backgroundImage={`${cdnPath}/assets/BecomeAnAgent.png`}
          altText="7 Steps to become a real estate agent"
          heroText={
            <Box className="baa-hero-step-spanText">
              <span className="baa-hero-step-span">7</span>
              <span>Steps</span>
              <span className="mb-4">
                <br />
                to become a <br /> Real Estate Agent
              </span>
            </Box>
          }
        />

        <Container
          disableGutters
          p={3}
          maxWidth
          className="baaQuestSection becomeAgentCont"
          container
          rowSpacing={5}
          justifyContent={"center"}
        >
          <LogoHeadingComponent
            icon={sect.headingIcon}
            heading={sect.heading}
            headingTypoVariant={"GothamBlack40"}
          />
          {/* sect.bodyContent exists? map through  */}
          {sect.bodyContent && (
            <Grid item xs={12}>
              <Grid container rowSpacing={3}>
                {sect.bodyContent.map((content, index) => {
                  if (isEqual(content.type, "paragraph")) {
                    return (
                      <RenderMultiParagraph
                        key={index}
                        paragraphs={content.paragraphContent}
                      />
                    );
                  }
                  if (isEqual(content.type, "bullet")) {
                    return (
                      <RenderBulletPoints
                        key={index}
                        columnCount={content.columns}
                        bulletHeading={content.bulletHeading}
                        headingTypoVariant={content.bulletHeadingType}
                        bulletPoints={content.bulletContent}
                        pointTypographyVariant={"GothamBlack22"}
                      />
                    );
                  }
                  return null;
                })}
              </Grid>
            </Grid>
          )}
        </Container>
        {becomeAnAgentStepsSectionData.map((section, index) => {
          return (
            <Container
              key={index}
              disableGutters
              p={3}
              maxWidth
              className={
                isEqual(section.colorVariant, "light")
                  ? "baaStepSectionLight becomeAgentCont"
                  : "baaStepSectionDark becomeAgentCont"
              }
              container
              rowSpacing={5}
              justifyContent={"center"}
            >
              <Grid item xs={12}>
                <Grid container justifyContent={"space-between"}>
                  <Grid item xs>
                    <LogoHeadingComponent
                      icon={section.headingIcon}
                      heading={section.heading}
                      headingTypoVariant={"GothamBlack40"}
                    />
                  </Grid>
                  {section.stepHeading && (
                    <Grid item xs>
                      <Typography
                        variant="GothamBlack40"
                        className={`stepCountHeading ${
                          isEqual(section.colorVariant, "light")
                            ? "stepCountHeadingDark"
                            : "stepCountHeadingLight"
                        }`}
                      >
                        {section.stepHeading}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>

              {/* section.bodyContent exists? map through  */}
              {section.bodyContent && (
                <Grid item xs={12}>
                  <Grid container rowSpacing={3}>
                    {section.bodyContent.map((content, index) => {
                      if (isEqual(content.type, "paragraph")) {
                        return (
                          <RenderMultiParagraph
                            key={index}
                            paragraphs={content.paragraphContent}
                          />
                        );
                      }
                      if (isEqual(content.type, "bullet")) {
                        return (
                          <RenderBulletPoints
                            key={index}
                            columnCount={content.columns}
                            bulletHeading={content.bulletHeading}
                            headingTypoVariant={content.bulletHeadingType}
                            bulletPoints={content.bulletContent}
                            pointTypographyVariant={"GothamBlack22"}
                          />
                        );
                      }
                      return null;
                    })}
                  </Grid>
                </Grid>
              )}
            </Container>
          );
        })}
      </Grid>

      <Grid pt={4} pb={2}>
        <LandingPageSubscribeSection />
      </Grid>
    </ErrorBoundary>
  );
}

export default BecomeAnAgent;
