import React from "react";
import { Grid, Stack } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import { LogoHeadingComponent } from "../../Components/LogoHeadingComponent/LogoHeadingComponent";
import { RenderMultiParagraph } from "../../Components/RenderStaticPages/RenderMultiParagraph/RenderMultiParagraph";
import { RenderBulletPoints } from "../../Components/RenderStaticPages/RenderBulletPoints/RenderBulletPoints";
import { buildingClassificationData } from "../../Constants/StaticPagesConstants";
import { isEqual } from "lodash";
import { RenderStaticGridTable } from "../../Components/RenderStaticPages/RenderStaticGridTable/RenderStaticGridTable";
import { RenderCardGrid } from "../../Components/RenderStaticPages/RenderCardGrid/RenderCardGrid";
import { cdnPath } from "../../Constants/StaticPagesConstants";

function BuildingClassification() {
  const checkBodyContent = (content, index) => {
    if (isEqual(content.type, "paragraph")) {
      return (
        <Grid item xs={12}>
          <RenderMultiParagraph
            key={index}
            paragraphs={content.paragraphContent}
          />
        </Grid>
      );
    }
    if (isEqual(content.type, "bullet")) {
      return (
        <Grid item xs={12}>
          <RenderBulletPoints
            key={index}
            columnCount={content.columns}
            bulletHeading={content.bulletHeading}
            headingTypoVariant={content.bulletHeadingType}
            bulletPoints={content.bulletContent}
            pointTypographyVariant={content.bulletPointType}
            pointIcon={"bulletMarkerValcom"}
          />
        </Grid>
      );
    }
    if (isEqual(content.type, "heading")) {
      return (
        <Grid item xs={12} mt={2}>
          <LogoHeadingComponent
            spacing={0}
            heading={content.headingContent}
            headingTypoVariant={content.headingTypoVariant}
          />
        </Grid>
      );
    }
    if (isEqual(content.type, "table")) {
      return (
        <Grid item xs={12}>
          <RenderStaticGridTable
            key={index}
            customClass={content.tableClass}
            columnCount={content.tableContent.length}
            tableContent={content.tableContent}
            tableHeadingType={"AlwynNewRoundedRegular20Bold"}
            tableRowType={"AlwynNewRoundedRegular20"}
          />
        </Grid>
      );
    }
    if (isEqual(content.type, "tableContentArray")) {
      return (
        <Grid
          container
          item
          columnGap={content.justifyContent ? 1 : 2}
          rowGap={2}
          justifyContent={
            content.justifyContent ? content.justifyContent : "center"
          }
        >
          {content.tableContentArray.map((table, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              lg={
                content.justifyContent
                  ? 11.5 / content.tableContentArray.length
                  : 10 / content.tableContentArray.length
              }
            >
              <RenderStaticGridTable
                key={index}
                customClass={content.tableClass}
                columnCount={table.length}
                tableContent={table}
                tableHeadingType={content.tableHeadingType}
                tableRowType={content.tableRowType}
                // bottomData ={content.tableRowType}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    if (isEqual(content.type, "cardGrid")) {
      // console.log('content.',content., sectionFour)
      return (
        <Grid
          container
          item
          spacing={2}
          justifyContent={
            content.justifyContent ? content.justifyContent : "center"
          }
          alignItems={""}
          lg={content.gridSize ? content.gridSize : 5}
        >
          {content.cardContentArray.map((content, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={5}
              lg={content.gridSize ? content.gridSize : 5}
            >
              <RenderCardGrid
                customClass={"buildingClassCardWhite"}
                cardHeading={content.cardHeading}
                cardBody={content.cardBody}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const { sectionOne, sectionTwo, sectionThree, sectionFour, sectionTwoPart2 } =
    buildingClassificationData;

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid container direction={"column"} justifyContent={"center"}>
        <Grid item>
          <BackgroundImageAndTextWithGradientBackground
            backgroundImage={`${cdnPath}/assets/BuildingClassification.png`}
            heroText={"Building Classification"}
            customHeroClass={"buildingClassificationHero"}
          />
        </Grid>
      </Grid>
      <Stack>
        {/* section 1 */}
        <Grid
          container
          className="baaStepSectionLight"
          justifyContent={"center"}
        >
          <Grid item xs={12} md={6} lg={9}>
            {sectionOne.sectionHeading && (
              <Grid item xs={9} mb={2}>
                <LogoHeadingComponent
                  heading={sectionOne.sectionHeading}
                  headingTypoVariant={"GothamBlack40"}
                />
              </Grid>
            )}
            {/* section.bodyContent exists? map through  */}
            {sectionOne.bodyContent && (
              <Grid item xs={10}>
                <Grid container rowSpacing={3} spacing={2}>
                  {sectionOne.bodyContent.map((content, index) => {
                    return checkBodyContent(content, index);
                  })}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        {/* sectopm 2 */}
        <Grid
          container
          className="baaStepSectionDark"
          justifyContent={"center"}
        >
          <Grid item xs={12} md={6} lg={9}>
            {sectionTwo.sectionHeading && (
              <Grid item xs={9} mb={2}>
                <LogoHeadingComponent
                  heading={sectionTwo.sectionHeading}
                  headingTypoVariant={"GothamBlack40"}
                />
              </Grid>
            )}

            {/* section.bodyContent exists? map through  */}
            {sectionTwo.bodyContent && (
              <Grid item xs={10}>
                <Grid container rowSpacing={3} justifyContent={"flex-end"}>
                  {sectionTwo.bodyContent.map((content, index) => {
                    return checkBodyContent(content, index);
                  })}
                </Grid>
              </Grid>
            )}
            {sectionTwoPart2.bodyContent && (
              <Grid item xs={11} mt={2}>
                <Grid container rowSpacing={3} justifyContent={"flex-end"}>
                  {sectionTwoPart2.bodyContent.map((content, index) => {
                    return checkBodyContent(content, index);
                  })}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* section 3 */}
        <Grid
          container
          className="baaStepSectionLight"
          justifyContent={"center"}
        >
          <Grid item xs={12} md={12} lg={9}>
            {sectionThree.sectionHeading && (
              <Grid item xs={9} mb={2}>
                <LogoHeadingComponent
                  heading={sectionThree.sectionHeading}
                  headingTypoVariant={"GothamBlack40"}
                />
              </Grid>
            )}

            {/* section.bodyContent exists? map through  */}
            {sectionThree.bodyContent && (
              <Grid item xs={12}>
                <Grid container rowSpacing={3}>
                  {sectionThree.bodyContent.map((content, index) => {
                    return checkBodyContent(content, index);
                  })}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        {/* secion 4 */}
        <Grid
          container
          className="baaStepSectionDark"
          justifyContent={"center"}
          alignItems={'center'}
        >
          <Grid item xs={12} md={12} lg={9}>
            {sectionFour.sectionHeading && (
              <Grid item xs={6} mb={1}>
                <LogoHeadingComponent
                  heading={sectionFour.sectionHeading}
                  headingTypoVariant={"GothamBlack40"}
                />
              </Grid>
            )}
            {/* section.bodyContent exists? map through  */}
            {sectionFour.bodyContent && (
              <Grid item xs={12} mt={1}>
                <Grid
                  container
                  rowSpacing={0}
                  columnGap={0}
                  justifyContent={"flex-start"}
                >
                  {sectionFour.bodyContent.map((content, index) => {
                    return checkBodyContent(content, index);
                  })}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Stack>
      <Stack spacing={2} mt={5}>
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Stack>
    </ErrorBoundary>
  );
}

export default BuildingClassification;
