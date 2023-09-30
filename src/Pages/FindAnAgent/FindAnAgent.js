import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "../../Components/ErrorBoundaries/ErrorBoundaries";
import LandingPageSubscribeSection from "../LandingPage/LandingPageSubscribeSection/LandingPageSubscribeSection";
import LandingPageLinksArea from "../LandingPage/LandingPageLinksArea/LandingPageLinksArea";
import PageSearchArea from "../LandingPage/LandingPageSearchSection/LandingPageSearchSection";
import { cdnPath } from "../../Constants/StaticPagesConstants";
import LoadingSkeleton from "../../Components/LoadingSkeleton/LoadingSkeleton";


function FindAnAgent() {

  const [loading, setLoading] =useState(false)

  useEffect(()=>{

  }, [loading])
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      {loading?
      <LoadingSkeleton/>
      :
      <>
       <Grid item>
        <PageSearchArea
          heading={"Find your Area Specialist"}
          searchAreaPositionClass={"LandingPageSearchAreaWrapperCenter"}
          imgUrl={`${cdnPath}/assets/agentSearchPage.jpg`}
          page={"findAgent"}
          setLoading={setLoading} loading={loading} 
        />
      </Grid>
      <Grid item>
        <LandingPageLinksArea />
      </Grid>
      <Grid>
        <LandingPageSubscribeSection />
      </Grid>
      </>
      }
     
    </ErrorBoundary>
  );
}

export default FindAnAgent;
