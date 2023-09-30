import React from "react";
import { Stack, Typography } from "@mui/material";

const ServiceCharges = () => {
  return (
    <Stack direction={"column"} spacing={1}>
      <Typography variant="AlwynNewRoundedRegular16">
        Services charges are applicable to all properties and vary depending on
        the building or community.
      </Typography>
      <Typography variant="AlwynNewRoundedRegular16">
        With these charges to be paid by the property owner are services covered
        such as building maintenance, cleaning, landscaping, insurance, reserve
        fund and security.
      </Typography>
      <Typography variant="AlwynNewRoundedRegular16">
        The reserve fund covers major repairs in the future such as Building
        upgrades or replacements of fire & safety systems, A/C systems, roof
        waterproofing, external cladding, elevators etc.
      </Typography>
    </Stack>
  );
};

export default ServiceCharges;
