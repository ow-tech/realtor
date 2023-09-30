import React,{ useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";
import RatingStarAndOthers from "../RatingStarAndOthers/RatingStarAndOthers";
import BuildingClassificationSystem from "../../Pages/ListingDetailPage/PropertyDetail/PropertyDetailBottom/RatingsOtherDetails/PropertyInfoDescription/BuildingClassificationSystem";
import { InfoIcon } from "../../Assets/SVG/Common/CommonSvgs";
import InfoIconDescription from "../InfoIconDescription/InfoIconDescription";

import isEqual from 'lodash/isEqual'

function RatingsAAAndStar({ darkStars = true,customStyles,infoIconClass,buildingObject }) {

  const buildingClass =buildingObject?.buildingClassification && !isEqual(buildingObject.buildingClassification,'Building not yet Classified')?buildingObject.buildingClassification.trim().replace(/^Class\s+/i, ''):'N/A'

  useEffect(()=>{
// console.log('buildingClass',buildingClass,'buildingObjectContext',buildingObjectContext,'buildingObject',buildingObject)
  },[buildingObject])
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box className={`marginBottom tagWithInfo  ${infoIconClass?infoIconClass:'tagWithInfoSvg'} ${customStyles?customStyles:'widthClassNameTagWithInfo'} `}>
          <Typography variant="DubaiRegular20" className="tagWithInfoText">
           {buildingClass
           }
          </Typography>
          <Box className={ `tagWithInfoIcon `} >
            <div className={ `tagWithInfoIconContainer `}>
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={"The NEWTON Building Classification System (NCS)"}
                  headingColor={"#808080"}
                  description={<BuildingClassificationSystem />}
                />
              </div>
            </div>
          </Box>
        </Box>
        <Typography variant="DubaiRegular18">
          {isEqual(buildingClass, 'N/A')?'Building Not Yet Classified':'Building Classification'}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Box  className={`marginTop tagWithInfo ${infoIconClass?infoIconClass:'tagWithInfoSvg'} ${customStyles?customStyles:'widthClassNameTagWithInfo'} `}>
          <Typography variant="DubaiRegular20" className="tagWithInfoText">
            N/A
          </Typography>
          <Box className="tagWithInfoIcon">
            <div className="tagWithInfoIconContainer">
              <InfoIcon />
              <div className="tagWithInfoIconTextBox">
                <InfoIconDescription
                  heading={"The VALCOM Building Rating"}
                  headingColor={"#808080"}
                  description={
                    <Typography variant="DubaiRegular16">
                      The VALCOM Building Rating shows you how actual residents
                      rate their building.
                    </Typography>
                  }
                />
              </div>
            </div>
          </Box>
        </Box>
        <RatingStarAndOthers defaultValue={0} dark={darkStars} />
        <Typography variant="DubaiRegular16" className="ratingComponent">
          (0 Ratings)
        </Typography>
      </Stack>
    </>
  );
}

export default RatingsAAAndStar;
