import React from "react";
import { Box } from "@mui/material";
import MobileImages from "./MobileImages";
import {
  AppleStore,
  PlayStore,
  HuaweiStore,
} from "../../../Assets/SVG/AppStores/AppStoreIcons";

function MobileApps() {
  const appstore = [
    {
      name: "Apple Store",
      icon: <AppleStore width="170px" height="70px" fill={'#153162'} />,
    },
    {
      name: "Google Play",
      icon: <PlayStore width="175px" height="70px" fill={'#153162'}/>,
    },
    {
      name: "Huawei Store",
      icon: <HuaweiStore width="175px" height="70px"fill={'#153162'} />,
    },
  ];

  return (
    <Box mt={3}>
      {appstore.map((item) => {
        return (
          <MobileImages key={item.name} name={item.name} icon={item.icon} />
        );
      })}
    </Box>
  );
}

export default MobileApps;
