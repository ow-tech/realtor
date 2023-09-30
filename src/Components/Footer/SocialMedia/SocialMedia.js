import React from "react";
import { Box, Link } from "@mui/material";
import {
  Instagram,
  Facebook,
  YouTube,
  Twitter,
  LinkedIn,
  TikTok,
} from "../../../Assets/SVG/Social/SocialMediaIcons";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/valcom.properties/",
    icon: <Facebook width="16px" height="16px" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/valcom_properties/?hl=en",
    icon: <Instagram width="16px" height="16px" />,
  },
  { name: "Twitter", url: "#", icon: <Twitter width="16px" height="16px" /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/valcom-properties/?originalSubdomain=ae",
    icon: <LinkedIn width="16px" height="16px" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC2QdqRPf2VNBkyM9hB2VhzA",
    icon: <YouTube width="22px" height="16px" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@valcom_properties",
    icon: <TikTok width="16px" height="16px" />,
  },
];

function SocialMedia() {
  return (
    <Box mt={3}>
      {socialMediaLinks.map((link, id) => (
        <Link target="_blank" href={link.url} color="inherit" key={id} mr={2}>
          {link.icon}
        </Link>
      ))}
    </Box>
  );
}

export default SocialMedia;
