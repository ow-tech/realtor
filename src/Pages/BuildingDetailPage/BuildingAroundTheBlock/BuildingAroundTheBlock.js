import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Typography, Box } from "@mui/material";
import TableComponent from "../../../Components/Table/InfoToggleTableComponent";
import {
  NearbySchoolsData,
  NearbyRestaurantsData,
  NearbySupermarketsData,
  NearbyAttractionsData,
  nearbyAroundCornerHeadingInfoData,
} from "../../../Constants/ConstantValues";

import InfoIconDescription from "../../../Components/InfoIconDescription/InfoIconDescription";

function BuildingAroundTheBlock({ buildingObject }) {
  const TreeView = ({ label, tableComponent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <Box className="aroundTheBlockHeaderWrapper" onClick={handleToggle}>
          <Typography variant="DubaiRegular24Bold">
            {isOpen ? <RemoveIcon /> : <AddIcon />} {label}
          </Typography>
        </Box>

        {isOpen && tableComponent}
      </div>
    );
  };

  const treeViewData = [
    {
      label: `Schools Near ${buildingObject.buildingName}`,
      tableComponent: (
        <TableComponent
          NearbyData={NearbySchoolsData}
          rowsPerPage={4}
          InfoDescription={InfoIconDescription}
          infoHeadersObj={nearbyAroundCornerHeadingInfoData}
          iconWidth={15}
          iconHeight={12}
          hasInfoHeaders={true}
          isSchool={true}
        />
      ),
    },
    {
      label: `Restaurants Near ${buildingObject.buildingName}`,
      tableComponent: (
        <TableComponent
          NearbyData={NearbyRestaurantsData}
          rowsPerPage={3}
          infoHeadersObj={nearbyAroundCornerHeadingInfoData}
          InfoDescription={InfoIconDescription}
          iconWidth={15}
          iconHeight={12}
          hasInfoHeaders={true}
        />
      ),
    },
    {
      label: `Supermarkets Near ${buildingObject.buildingName}`,
      tableComponent: (
        <TableComponent
          NearbyData={NearbySupermarketsData}
          rowsPerPage={3}
          infoHeadersObj={nearbyAroundCornerHeadingInfoData}
          InfoDescription={InfoIconDescription}
          iconWidth={15}
          iconHeight={12}
          hasInfoHeaders={true}
        />
      ),
    },
    {
      label: `Attractions Near ${buildingObject.buildingName}`,
      tableComponent: (
        <TableComponent
          /* Pass props if needed */ NearbyData={NearbyAttractionsData}
          rowsPerPage={3}
          infoHeadersObj={nearbyAroundCornerHeadingInfoData}
          InfoDescription={InfoIconDescription}
          iconWidth={15}
          iconHeight={12}
          hasInfoHeaders={true}
        />
      ),
    },
  ];

  return (
    <Box className="aroundTheBlockWrapper">
      <Box className="aroundTheBlockTableWrapper">
        <Box>
          <Typography variant="DubaiRegular24Bold">Around the Block</Typography>
        </Box>
        <div>
          {treeViewData.map((data, index) => (
            <TreeView
              key={index}
              label={data.label}
              tableComponent={data.tableComponent}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default BuildingAroundTheBlock;
