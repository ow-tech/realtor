import React from "react";
import LandingPageSearchArea from "./LandingPageSearchArea/LandingPageSearchArea";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ErrorBoundaryFallBack from "../../../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";

function PageSearchArea({ heading, hasBuyRent, searchAreaPositionClass, imgUrl, imgAlt, placeHolderUrl, page,setLoading,loading }) {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <div className="landingPageSearch">
          <div className="homePageBackgroundImage">
            <LazyLoadImage src={imgUrl} alt={imgAlt} width={2734} height={1636} className="homePageBackgroundImage" />
          </div>

          <div className={`LandingPageSearchAreaWrapper ${searchAreaPositionClass}`}>
            <LandingPageSearchArea heading={heading} hasBuyRent={hasBuyRent} page={page} setLoading={setLoading} loading={loading} />
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default PageSearchArea;
