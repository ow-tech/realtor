import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import TableComponent from "../../../Components/Table/InfoToggleTableComponent";
import { NearbySchoolsData, nearbySchoolsHeadingInfoData } from "../../../Constants/ConstantValues";
import CustomButton from "../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import customInfoDescriptionForSchools from "../../../Components/InfoIconDescription/customInfoDescriptions/customInfoDescriptionForSchools";

function NearbySchools() {
  return (
    <Grid id="nearbySchoolsSection" className="nearbySchoolsSection tableSectionContainer" container rowSpacing={2} px={2} py={8} mt={5}>
      <Grid item xs={12}>
        {/* <TableComponent
          rowsPerPage={3}
          infoHeadersObj={nearbySchoolsHeadingInfoData}
          InfoDescription={customInfoDescriptionForSchools}
          iconWidth={15}
          iconHeight={12}
          hasInfoHeaders={true}
          NearbyData={NearbySchoolsData}
          isSchool={true}
        /> */}
      </Grid>
      <Grid item xs={12}>
        <Typography className="tableSectionHeading" variant="DubaiRegular14" ml={0}>
          {/* {NearbySchoolsData.khdaAttribution} */}
          Comming Soon
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link href="/">
          <CustomButton
            dark={false}
            customClassName="nearbySchoolsLearnMoreBtn"
            text={NearbySchoolsData.btnLearnMore}
            typographyVariant="DubaiRegular20"
            rightIcon={<ListingCardIcon shape={NearbySchoolsData.endIcon} width={15} height={12} />}
            fullWidth={false}
          />
        </Link>
      </Grid>
    </Grid>
  );
}
export default NearbySchools;
