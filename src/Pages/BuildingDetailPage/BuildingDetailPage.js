import React, { useEffect, useContext, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import BuildingOtherInfo from "./BuildingOtherInfo/BuildingOtherInfo";
import BuildingFacts from "./BuildingFacts/BuildingFacts";
import BuildingAmenities from "./BuildingAmenities/BuildingAmenities";
import VirtualTourComponent from "../../Components/VirtualTour/VirtualTourComponent";
// import LocationScoring from "../../Components/LocationScoring/LocationScoring";
import BuildingAvailableUnits from "./BuildingAvailableUnits/BuildingAvailableUnits";
// import BuildingAroundTheBlock from "./BuildingAroundTheBlock/BuildingAroundTheBlock";
import OtherAgents from "../../Components/OtherAgents/OtherAgents";
// import RatingsReviewsSection from "./RatingsReviewsSection/RatingsReviewsSection";
import SearchingMap from "../../Components/SearchingMap/SearchMap";
import SimilarBuildingsSection from "./SimilarBuildingsSection/SimilarBuildingsSection";
import {
  getListingsByBuilding,
  getAgentDetails,
  getBuildingDetails,
} from "../../network/apiServices";
import AppContext from "../../context/AppContext";
import TimerLoadingSkeleton from "../../Components/LoadingSkeleton/TimerLoadingSkeleton";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import { isEqual } from "lodash";
import { errorToast } from "../../utils/useToast";

function BuildingDetailPage() {
  const [buildingAgents, setBuildingAgents] = useState([]);
  const [buildingData, setBuildingData] = useState({});
  const { selectedCountry, setBuildingReferenceNoContext, setBuildingObjectContext } =
    useContext(AppContext);

  const { id } = useParams();

  useEffect(() => {
    setBuildingReferenceNoContext(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    async function fetchAndSetBuildingAgents() {
      try {
        const building = await getBuildingDetails({
          buildingRefNumber: id,
        });

        setBuildingData(building.data);
        setBuildingObjectContext(building.data)
        console.log('buildingObject',building.data)

        //get building's listings
        const listingsArray = await getListingsByBuilding({
          countryName: selectedCountry,
          buildingRefNumber: id,
        });
// console.log('listingsArray',listingsArray)
        if (!isEqual(listingsArray.data.status, "SUCCESS")) {
          setBuildingAgents([]);
          // errorToast(
          //   `Oops! Something went wrong: ${listingsArray.data.message}`
          // );
        } else {
          //get owners for all buildings listings
          const emailList = listingsArray.data.listings
            .filter((listing) => listing?.owner?.email)
            .map((listing) => listing.owner.email);
          //get agent details to populate other agents
          const buildingAgentsDetails = await getAgentDetails({
            agentEmail: emailList,
          });

          setBuildingAgents(buildingAgentsDetails.data.agentDetails);
        }
      } catch (error) {
        errorToast(`Building and or agent details: ${error}`);
      }
    }

    fetchAndSetBuildingAgents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // buildingReferenceNoContext,buildingData

  return Object.keys(buildingData).length > 0 ? (
    <Box className="listingDetailWrapper">
      {/* <ListingDetailPageHeader
        buildingObject={buildingData}
        page={"buildingDetails"}
      /> */}
      <Box className="buildingDetailBodyWrapper">
        <BuildingOtherInfo buildingObject={buildingData} />
        <BuildingFacts buildingObject={buildingData} />
        <BuildingAmenities buildingObject={buildingData} />
        {buildingData?.video ? (
          <VirtualTourComponent
            title={buildingData?.subAreaSubCommunity}
            videoUrl={buildingData.video}
          />
        ) : null}

        <SearchingMap property={buildingData} />
        {/* <LocationScoring fields={locationScoringFields} /> */}
        <BuildingAvailableUnits buildingObject={buildingData} />
        {/* <BuildingAroundTheBlock buildingObject={buildingData} /> */}
        {/* <RatingsReviewsSection generalData={ratingsReviewsData} /> */}
        <SimilarBuildingsSection buildingObject={buildingData} />
        {buildingAgents.length > 0 ? (
          <OtherAgents title={"Get in touch with a Building Expert"} agents={buildingAgents} />
        ) : null}
        {/* <BuildingExPloreNeighborhood buildingObject={buildingData} /> */}
        <LandingPageLinksArea />
        <LandingPageSubscribeSection />
      </Box>
    </Box>
  ) : (
    <TimerLoadingSkeleton />
  );
}

export default BuildingDetailPage;
