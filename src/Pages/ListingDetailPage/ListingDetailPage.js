import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import SimilarHomesSection from "./SimilarHomesSection/SimilarHomesSection";
import PropertyDetails from "./PropertyDetail/PropertyDetails";
import ListingAmenities from "./ListingAmenities/ListingAmenities";
import AgentSection from "./AgentSection/AgentSection";
import BuildingSection from "./BuildingSection/BuildingSection";
import Neighborhood from "./Neighborhood/Neighborhood";
// import LocationScoring from "../../Components/LocationScoring/LocationScoring";
// import OtherAgents from "../../Components/OtherAgents/OtherAgents";
import VirtualTourComponent from "../../Components/VirtualTour/VirtualTourComponent";
// import { locationScoringFields } from "../../Constants/ConstantValues";
// import MortgageSection from "./MortgageSection/MortgageSection";
// import NearbySchools from "./NearbySchools/NearbySchools";
import SearchMap from "../../Components/SearchingMap/SearchMap";
import AppContext from "../../context/AppContext";
import { getObjectById, toCarouselArray } from "../../utils/utility";
import { getBuildingDetails, getListings } from "../../network/apiServices";
import TimerLoadingSkeleton from "../../Components/LoadingSkeleton/TimerLoadingSkeleton";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import { buildingData } from "../../Constants/buildingData";

function ListingDetailPage() {
  const [buildingObject, setBuildingObject] = useState();
  const listingId = useParams();
  const {
    setBuildingObjectContext,
    selectedCountry,
    listings,
    setListings,
    navLinkBuyOrRent,
    setNavLinkBuyOrRent,

    setListingObjectContext,
  } = useContext(AppContext);
  const _ = require("lodash");

  const property =
    listings.length > 0
      ? getObjectById(listings, listingId.id, "referenceNumber")
      : null;
  // console.log('listings', listings, 'property',property)
  useEffect(() => {
    setListingObjectContext(property);
    // async function fetchAndSetbuilding() {
    //   try {
        if (property) {
          property?.saleOrRent === "For Rent"
            ? setNavLinkBuyOrRent("rent")
            : setNavLinkBuyOrRent("buy");

          // useEffect(()=>{},[buyOrRent])
          // const buildingReferenceNumber = property.referenceNumberBuilding;
          // const building = await getBuildingDetails({
          //   //sometimes building referenceNumberBuilding is null. handle this.
          //   buildingRefNumber: buildingReferenceNumber,
          // });

          setBuildingObject(buildingData);
          setBuildingObjectContext(buildingData);
        }
      // } catch (error) {
      //   console.log("buidlingError", error);
      // }
    // }

    // fetchAndSetbuilding();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings, property, selectedCountry]);

  useEffect(() => {
    property?.saleOrRent === "For Rent"
      ? setNavLinkBuyOrRent("rent")
      : setNavLinkBuyOrRent("buy");
    // if (!listings || _.isEqual(listings.length, 0)) {
    //   async function fetchAndSetListings() {
    //     try {
    //       const listingsArray = await getListings({
    //         countryName: selectedCountry,
    //       });

    //       let images = listingsArray.data.listings
    //         ? toCarouselArray(
    //             "title",
    //             listingsArray.data.listings,
    //             "listingImages"
    //           )
    //         : [];
    //       //  console.log(images)
    //       setListings(images);
    //       setListingObjectContext(images);
    //     } catch (error) {
    //       console.error("Error Refetching All listings:", error);
    //     }
    //   }
    //   fetchAndSetListings();
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  useEffect(() => {
    // console.log('selectedCountry',selectedCountry)
  }, [navLinkBuyOrRent, selectedCountry]);
  console.log("listing :", property, "buildingObject", buildingObject);
  return property ? (
    <Box className="listingDetailWrapper ">
      {/* <ListingDetailPageHeader page={"listingDetails"} property={property} /> */}
      <Box className="ListingDetailBody">
        <PropertyDetails property={property} buildingObject={buildingObject} />
        <ListingAmenities property={property} buildingObject={buildingObject} />

        {/* <AgentSection agentDetails={property.owner}/> */}

        <AgentSection
          agentDetails={property.owner}
          propertyDetails={property}
        />
        {property.video ? (
          <VirtualTourComponent
            title={property?.subAreaSubCommunity}
            videoUrl={property.video}
          />
        ) : null}

        <SearchMap property={property} />
        {/* <LocationScoring fields={locationScoringFields} /> */}
        {/* <MortgageSection property={property} /> */}
        {/* {buildingObject?.message?
        null
        : */}
        {buildingObject && <BuildingSection buildingObject={buildingObject} />}

        {/* <OtherAgents title={otherAgentHeadings.listingAgents} /> */}
        {/* <NearbySchools /> */}
        <SimilarHomesSection property={property} rowsPerPage={9} />
        <Neighborhood property={property} />
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Box>
    </Box>
  ) : (
    <TimerLoadingSkeleton />
  );
}

export default ListingDetailPage;
