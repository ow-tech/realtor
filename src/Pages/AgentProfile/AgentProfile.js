import React, { useState, useEffect, useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import AppContext from "../../context/AppContext";
import { useLocation, Link } from "react-router-dom";
import {
  getAgentDetails,
  getListingsByAgent,
  savedAgents,
} from "../../network/apiServices";
import CustomButton from "../../Components/Button/CustomButton";
import ListingCardIcon from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { HeaderLinksDivider } from "../../Components/HeaderLinksDivider/HeaderLinksDivider";
import BackgroundImageAndTextWithGradientBackground from "../../Components/BackgroundImageAndTextWithGradientBackground/BackgroundImageAndTextWithGradientBackground";
import AgentSalesRentals from "./AgentSalesRentals/AgentSalesRentals";
import Card from "../../Components/Cards/Card";
import { Designation } from "../../Components/ListingAgent/Designation/Designation";
import {
  base64ToObj,
  matchObjectByProperty,
  removeObjectById,
  toCarouselArray,
} from "../../utils/utility";
import ImageFrame from "../../Components/ImageFrame/ImageFrame";
import {
  defaultAgentContactEmail,
  defaultAgentContactNumber,
  notAvailable,
  defaultAgentABoutMe,
  mobGrids,
  tabGrids,
  laptopGrids,
} from "../../Constants/ConstantValues";
import { errorToast } from "../../utils/useToast";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import { LogoHeadingComponent } from "../../Components/LogoHeadingComponent/LogoHeadingComponent";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import isEqual from "lodash/isEqual";
import { agentDetail } from "../../Constants/agentDetails";

function AgentProfile() {
  //add country as well
  const { selectedCountry, userObj, userPreferences, setUserPreferences,listings } =
    useContext(AppContext);
  const userSavedAgents = userPreferences?.savedAgents;

  const [allAgentListings, setAllAgentListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  // const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [agentData, setAgentData] = useState(null);
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {}, [expanded]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  //check location state for agentData, otherwise check url params. agent param b64 obj must contain at least [agentEmail/emailId] and [agentName/ firstName and lastName] both
  let agent = location.state?.agentData
    ? location.state.agentData
    : base64ToObj(searchParams.get("agent"));

  //get uniform agent details
  let agentEmail = agent?.agentEmail ? agent?.agentEmail : agent?.emailId;
  let agentName = agent?.agentName
    ? agent?.agentName
    : `${agent?.firstName} ${agent?.lastName}`;
  let mobileNumber = agentData?.workPhone
    ? agentData?.workPhone
    : defaultAgentContactNumber;
  let knowAgentParagraphs =
    agentData?.aboutMe && !isEqual(agentData?.aboutMe, "")
      ? agentData?.aboutMe
      : defaultAgentABoutMe;

  const headerLinks = [
    {
      path: "/about-agent",
      text: `About ${agentName}`,
      sectionId: "about-agent",
    },
    {
      path: "/our-clients-say",
      text: `What our clients say`,
      sectionId: "our-clients-say",
    },
    { path: "/spotlight", text: `Spotlight`, sectionId: "spotlight" },
    {
      path: "/agent-listings",
      text: `${agentName}'s listings`,
      sectionId: "agent-listings",
    },
    {
      path: "/agent-transactions",
      text: `Recent transactions`,
      sectionId: "agent-transactions",
    },
  ];

  useEffect(()=>{
setAgentData(agentDetail[0])
  })

  //on first load fetch agent data
  useEffect(() => {
    async function getAgentData() {
      try {
        const agent = await getAgentDetails({
          agentEmail: [agentEmail],
        });
        setAgentData(agent.data.agentDetails[0]);
      } catch (error) {
        // console.error("Error fetching agent:", error);
      }
    }

    getAgentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //get full array of agents listings
  //get full array of agents transactions

  useEffect(() => {
    // let data = {
    //   //get from context
    //   countryName: selectedCountry,
    //   agentEmailId: agentEmail,
    // };

    // try {
    //   getListingsByAgent(data)
    //     .then((res) => {
    //       if (!isEqual(res.data.status, "SUCCESS")) {
    //         //toast failed message
    //         errorToast(`Oops! Something went wrong: ${res.data.message}`);
    //       } else {
    //         // convert listings to correct image format
    //         let formattedListings = toCarouselArray(
    //           "title",
    //           res.data.listings,
    //           "listingImages"
    //         );

            setAllAgentListings(listings);
            setFilteredListings(
              listings.filter((listing) =>
                isEqual(listing.saleOrRent, "For Sale")
              )
            );
          
     
    //     .catch((error) => {});
    // } catch (err) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //not all agents are coming from saved agents
    setLiked(false);
    if (agentData?.liked) {
      setLiked(true);
    } else if (
      userSavedAgents &&
      matchObjectByProperty(userSavedAgents, "agentEmail", agentEmail).length >
        0
    ) {
      setLiked(true); //does not exist yet
    }

    //if agentData?.like exists set like to liked otherwise, check if agent exists in saved agents and set to liked based on that?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentData, liked]);

  const handleListings = (newValue) => {
    // if newValue is sales filter all listings array according to sales and setListings,
    // if rental filter according to rentals and setListings
    switch (newValue) {
      case "sales":
        //filter listings array and set state to this
        setFilteredListings(
          allAgentListings.filter((listing) =>
            isEqual(listing.saleOrRent, "For Sale")
          )
        );

        return;
      case "rentals":
        //filter listings array and set state to this
        setFilteredListings(
          allAgentListings.filter((listing) =>
            isEqual(listing.saleOrRent, "For Rent")
          )
        );

        return;
      default:
        return;
    }
  };

  const handleSaveAgent = () => {
    if (!userObj) {
      errorToast(`Please login first.`);
      return;
    }
    //delete agent if previously liked

    if (liked) {
      const payload = {
        savedAction: "DELETE",
        agentEmail: agentEmail,
        email: userObj?.email,
      };

      savedAgents(payload)
        .then((res) => {
          if (!res.data.status === "SUCCESS") {
            //toast failed message
            errorToast(`Oops! Something went wrong.`);
          } else {
            let newProp = removeObjectById(
              agentEmail,
              userSavedAgents,
              "agentEmail"
            );

            const updatedData = {
              ...userPreferences,
              savedAgents: newProp,
            };

            setUserPreferences(updatedData);
            setLiked(false);
          }
        })
        .catch((err) => {
          // console.log("delete err: ", err);
          errorToast(`Error:`, err);
        });
    }
    //add agent if not previously liked

    if (!liked) {
      const payload = {
        savedAction: "ADD",
        email: userObj?.email,
        agentEmail: agentEmail,
        imageUrl: agentData?.imageUrl,
        agentName: agentName,
        designation: agentData?.designation,
        certifications: agentData?.certifications,
        languageSpoken: agentData?.languageSpoken,
        mobileNumber: mobileNumber ? mobileNumber : agentData?.mobileNumber,
        // brn: agentData.brn,
      };

      savedAgents(payload)
        .then((res) => {
          if (!isEqual(res.data.status, "SUCCESS")) {
            //toast failed message
            errorToast(`Oops! Something went wrong when saving.`);
          } else {
            //format received agent object and remove message and success fields and add liked
            const { message, status, ...filteredResponse } = res.data;
            filteredResponse.liked = true;
            //update the userSavedAgents object
            userSavedAgents.push(filteredResponse);

            const updatedData = {
              ...userPreferences,
              userSavedAgents,
            };
            setUserPreferences(updatedData);
            setLiked(true);
          }
        })
        .catch((err) => {});
    }
  };

  const visibleText = expanded
    ? knowAgentParagraphs
    : knowAgentParagraphs?.slice(0, 550);
  const shouldAddDots = !expanded && knowAgentParagraphs.length > 550;
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <Grid item className="agentProfileHeaderWrapper">
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Link to="/" onClick={() => window.history.back()}>
              <CustomButton
                text="Back"
                dark={false}
                size="12px"
                typographyVariant="DubaiRegular14"
                leftIcon={
                  <ListingCardIcon shape={"redo"} shapeColor={"black"} />
                }
                variant="outlined"
              />
            </Link>
          </Grid>
          <Grid item>
            <CustomButton
              text={`Contact ${agent?.firstName}`}
              dark={true}
              size="12px"
              typographyVariant="DubaiRegular16"
              rightIcon={
                <ListingCardIcon shape={"arrowRight"} shapeColor={"white"} />
              }
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <CustomButton
                  text={`Share`}
                  dark={false}
                  size="12px"
                  typographyVariant="DubaiRegular14"
                  leftIcon={
                    <ListingCardIcon shape={"share"} shapeColor={"black"} />
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <CustomButton
                  text={`Save `}
                  dark={false}
                  size="12px"
                  typographyVariant="DubaiRegular14"
                  leftIcon={
                    <ListingCardIcon
                      shape={"featherHeart"}
                      color={liked ? "red" : null}
                    />
                  }
                  variant="outlined"
                  onClick={handleSaveAgent}
                />
              </Grid>
              <Grid item>
                <CustomButton
                  text={`More`}
                  dark={false}
                  size="12px"
                  typographyVariant="DubaiRegular14"
                  leftIcon={
                    <ListingCardIcon shape={"more"} shapeColor={"white"} />
                  }
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <HeaderLinksDivider
            menuItems={headerLinks}
            menuItemTypographyVariant={"DubaiRegular16"}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Grid container rowSpacing={2} justifyContent={"center"}>
          <Grid className="agent-profile-info-wrapper" item xs={12}>
            {/* agent profile details */}

            <Grid className="agent-profile-banner" item mb={2}>
              <BackgroundImageAndTextWithGradientBackground
                customHeroClass={"agent-profile-banner"}
                backgroundImage={`${cdnPath}/assets/AgentProfile.png`}
                altText={`Agent Banner Image`}
              />
            </Grid>
            <Grid item>
              <Grid
                className="agent-profile-details"
                container
                spacing={2}
                justifyContent={"center"}
              >
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={2.5}
                  className="agent-profile-image-wrapper"
                >
                  <ImageFrame
                    src={agentData?.imageUrl}
                    alt={agentName}
                    width={"100%"}
                    height={"160%"}
                    imageStyleClass={"agentProfileImageFrameImageStyle"}
                    wrapperClass={"agent-profile-profile-image"}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                  <Grid container direction={"column"}>
                    {/* Details grid */}
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Designation
                            name={agentName}
                            designation={agentData?.designation}
                            nameTypoVariant={"GothamBlack32"}
                            designationTypoVariant={"DubaiRegular24"}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* broker reg, lang, certifications */}
                          <Grid
                            container
                            spacing={2}
                            alignItems={"flex-end"}
                            justifyContent={"space-between"}
                          >
                            <Grid item xs={8}>
                              <Grid
                                container
                                spacing={2}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                              >
                                <Grid item>
                                  {/* broker reg and languages */}
                                  <Grid container direction={"column"}>
                                    <Grid item mb={-1}>
                                      {/* broker registration */}
                                      <Typography
                                        variant={"DubaiRegular20Bold"}
                                      >
                                        Broker Registration:{" "}
                                      </Typography>
                                      <Typography variant={"DubaiRegular20"}>
                                        {agentData?.brn
                                          ? agentData.brn
                                          : notAvailable}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      {/* Languages */}
                                      <Typography
                                        variant={"DubaiRegular20Bold"}
                                      >
                                        Languages:{" "}
                                      </Typography>
                                      {
                                        // map through spoken languages and render
                                        // agentData.spokenLanguages.map((lang, index) => (
                                        //   <Typography key={index} variant={"DubaiRegular20"}>
                                        //     {lang}
                                        //   </Typography>
                                        // ))
                                        <Typography variant={"DubaiRegular20"}>
                                          {agentData?.languageSpoken
                                            ? agentData.languageSpoken.join(
                                                ", "
                                              )
                                            : notAvailable}
                                        </Typography>
                                      }
                                    </Grid>
                                  </Grid>
                                </Grid>

                                <Grid item>
                                  <Grid container spacing={2}>
                                    {agentData?.certifications
                                      ? agentData?.certifications.map(
                                          (certification, index) => {
                                            return (
                                              <Grid item>
                                                <ListingCardIcon
                                                  key={index}
                                                  shape={certification}
                                                  width="60"
                                                  height="80"
                                                />
                                              </Grid>
                                            );
                                          }
                                        )
                                      : null}
                                    {/* <Grid item>
                                      <ListingCardIcon shape={"RERA"} width="60" height="80" />
                                    </Grid>
                                    <Grid item>
                                      <ListingCardIcon shape={"RERA"} width="60" height="80" />
                                    </Grid>
                                    <Grid item>
                                      <ListingCardIcon shape={"RERA"} width="60" height="80" />
                                    </Grid> */}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={8}>
                              {/* area specialization and email phone */}

                              <Grid
                                container
                                spacing={2}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                              >
                                <Grid item>
                                  <Grid container direction={"column"}>
                                    <Grid item mb={-1}>
                                      {/* { Area} */}
                                      <Typography
                                        variant={"DubaiRegular20Bold"}
                                      >
                                        Area:{" "}
                                      </Typography>
                                      <Typography variant={"DubaiRegular20"}>
                                        {agentData?.areasOfExpertise
                                          ? agentData.areasOfExpertise.join(
                                              ", "
                                            )
                                          : notAvailable}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      {/* { Specialization } */}
                                      <Typography
                                        variant={"DubaiRegular20Bold"}
                                      >
                                        Specialisation:{" "}
                                      </Typography>
                                      <Typography variant={"DubaiRegular20"}>
                                        {agentData?.specialization
                                          ? agentData.specialization
                                          : notAvailable}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>

                                {/* Email phone */}
                                <Grid item>
                                  <Grid container direction={"column"}>
                                    <Grid item mb={-1}>
                                      <Typography
                                        className="agent-details-agent-email"
                                        variant={"DubaiRegular20"}
                                      >
                                        {agentEmail
                                          ? agentEmail
                                          : defaultAgentContactEmail}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        className="agent-details-agent-phone"
                                        variant={"DubaiRegular20"}
                                      >
                                        {agentData?.workPhone
                                          ? `+${agentData.workPhone}`
                                          : defaultAgentContactNumber}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="agent-profile-body-content" xs={12}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                {/* Get to know agent */}
                <Grid
                  className="agent-profile-get-to-know"
                  container
                  rowGap={2}
                >
                  <LogoHeadingComponent
                    heading={`Get to know ${agentName}`}
                    headingTypoVariant={"GothamBlack24"}
                  />
                  {/* <RenderMultiParagraph
                    paragraphs={[knowAgentParagraphs]}
                    paragraphTypoVariant={"AlwynNewRoundedRegular20"}
                    defaultParagraphs={2}
                    defaultCharacters={95}
                    hasViewMore
                    expandText={"Continue Reading"}
                    collapsedText={"Collapse"}
                    dropDownTypoVariant={"DubaiRegular20"}
                  /> */}
                  <Grid>
                    <Box className="agentsDescripBox">
                      <Typography variant="AlwynNewRoundedRegular20">
                        {visibleText}
                        {shouldAddDots && " ..."}
                      </Typography>
                      {knowAgentParagraphs.length <= 550 ? null : (
                        <Box className="agentsViewBtn" onClick={handleClick}>
                          <Typography variant="AlwynNewRoundedRegular20">
                            {expanded ? "Read Less" : "Continue Reading"}
                          </Typography>
                          {expanded ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item id="agent-listings" xs={12}>
                {allAgentListings.length > 0 && (
                  <AgentSalesRentals
                    titleHeading={`${agentName}'s Listings`}
                    handleTabClick={handleListings}
                    itemSpacing={2}
                    allAgentListings={allAgentListings}
                  >
                    {filteredListings.length > 0
                      ? filteredListings.map((listing, key) => (
                          <Grid
                            key={key}
                            item
                            xs={mobGrids}
                            sm={tabGrids}
                            md={laptopGrids}
                            lg={laptopGrids}
                          >
                            <Card item={listing} key={key} availableGrids={4} />
                          </Grid>
                        ))
                      : notAvailable}
                    {/* children rendered listings according to listings */}
                  </AgentSalesRentals>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <LandingPageLinksArea />
      </Grid>
      <Grid>
        <LandingPageSubscribeSection />
      </Grid>
    </ErrorBoundary>
  );
}

export default AgentProfile;
