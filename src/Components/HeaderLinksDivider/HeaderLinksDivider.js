import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { isMediumScreens } from "../../Constants/ConstantValues";

export function HeaderLinksDivider({ menuItems, menuItemTypographyVariant }) {
  return (
<Box className="bottomHeaderLinksWrapper" elevation={3}>
      <Stack
        spacing={2}
        direction={isMediumScreens ? 'row' : 'row'}
        divider={ <Typography variant={menuItemTypographyVariant}>|</Typography>}
        justifyContent={isMediumScreens ? 'flex-start' : 'flex-start'}
        alignItems={isMediumScreens ? 'flex-start' : 'flex-start'}
        className="bottomHeaderLinks"
        useFlexGap
        flexWrap='wrap'
      >
        {menuItems.map((menuItem, index) => (
          <ScrollLink className="bottomHeaderLinks" key={index} to={menuItem.sectionId} smooth={true} offset={-200} duration={500}>
            <Typography variant={menuItemTypographyVariant} key={index} text={menuItem.text}>
              {menuItem.text}
            </Typography>
          </ScrollLink>
        ))}
      </Stack>
    </Box>
  );
}
