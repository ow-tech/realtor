import React from "react";
import { Container } from "@mui/material";
import {
  popularAreasLinks,
  popularCitiesLinks,
} from "../../../Constants/ConstantValues";
import LinksAreaChildContainer from "./LinksAreaChildContainer/LinksAreaChildContainer";
import { useNavigate } from "react-router-dom";
import { objToBase64 } from "../../../utils/utility";

const LandingPageLinksArea = () => {
  const navigate = useNavigate();

  const handleSeoLinkClick = (data) => {
    const queryParamValue = objToBase64(data);
    navigate(`/buy/search?value=${queryParamValue}`);
  };

  return (
    <Container disableGutters={true} className="linksAreaContainer">
      <LinksAreaChildContainer
        heading={"Real Estate in Popular Areas"}
        subHeading={`Browse listings, view photos, and connect with an agent to schedule a
          viewing in some of our most popular areas.`}
        links={popularAreasLinks}
        colSize={7}
        clickHandler={handleSeoLinkClick}
      />

      <LinksAreaChildContainer
        heading={"Real Estate in Popular Cities"}
        subHeading={`Find your next dream home in one of these cities.`}
        links={popularCitiesLinks}
        colSize={3}
        clickHandler={handleSeoLinkClick}
      />
    </Container>
  );
};

export default LandingPageLinksArea;
