import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const KeyFacts = ({ expectWhatDesc, marketDesc, loveThingsDesc }) => {
  return (
    <div>
      <Typography variant="GothamBlack24">Key Facts</Typography>
      <Stack direction="row" spacing={2} mt={1}>
        <Typography variant="DubaiRegular18Bold">1</Typography>
        <Typography variant="DubaiRegular18Bold">WHAT TO EXPECT</Typography>
      </Stack>
      <Box className="width100 keyFactsDescription">
        <Typography variant="DubaiRegular18">{expectWhatDesc}</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Typography variant="DubaiRegular18Bold">2</Typography>
        <Typography variant="DubaiRegular18Bold">THE MARKET</Typography>
      </Stack>
      <Box className="width100 keyFactsDescription">
        <Typography variant="DubaiRegular18">{marketDesc}</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Typography variant="DubaiRegular18Bold">3</Typography>
        <Typography variant="DubaiRegular18Bold">THINGS TO LOVE</Typography>
      </Stack>
      <Box className="width100 keyFactsDescription">
        <Typography variant="DubaiRegular18">{loveThingsDesc}</Typography>
      </Box>
    </div>
  );
};

export default KeyFacts;
