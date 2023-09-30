import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import {
  BedIcon,
  BathIcon,
  MeterIcon,
  SqftIcon,
} from "../../Assets/SVG/Common/CommonSvgs";
import { formatNumberWithCommasAndWithoutDecimals } from "../../utils/utility";
const BedBathArea = ({ beds, baths, meters, sqfts }) => {
  return (
    <>
      <Stack mt={2} mb={2} direction="row" spacing={2} alignItems="center">
        <Stack
          className="bedBathArea"
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <BedIcon />
          <Typography variant="DubaiRegular18">{beds}</Typography>
        </Stack>
        <Divider
          className="bedBathAreaDivider"
          orientation="vertical"
          flexItem
        />
        <Stack
          className="bedBathArea"
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <BathIcon />
          <Typography variant="DubaiRegular18">{baths}</Typography>
        </Stack>
        <Divider
          className="bedBathAreaDivider"
          orientation="vertical"
          flexItem
        />
        <Stack
          className="bedBathArea"
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <MeterIcon />
          <Typography variant="DubaiRegular18">{meters}</Typography>
        </Stack>
        <Divider
          className="bedBathAreaDivider"
          orientation="vertical"
          flexItem
        />
        <Stack
          className="bedBathArea"
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <SqftIcon />
          <Typography variant="DubaiRegular18">
            {formatNumberWithCommasAndWithoutDecimals(sqfts)}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default BedBathArea;
