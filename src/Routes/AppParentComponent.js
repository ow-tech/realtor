import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "../Components/NavBar/NavBar";
import LandingPageBody from "../Pages/LandingPage/LandingPageBody";
import FooterComponent from "../Components/Footer/FooterComponent";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import customTheme from "../Theme/AppParentComponentTheme";
import ErrorBoundaryFallBack from "../Components/ErrorBoundaries/ErrorBoundaries";
import { ErrorBoundary } from "react-error-boundary";
import ListingDetailPage from "../Pages/ListingDetailPage/ListingDetailPage";
import BuildingDetailPage from "../Pages/BuildingDetailPage/BuildingDetailPage";
import SignIn from "../Pages/AuthPages/SignIn/SignIn";
import TermsAndPolicy from "../Pages/AuthPages/TermsAndPolicy/TermsAndPolicy";
import BecomeAnAgent from "../Pages/BecomeAnAgent/BecomeAnAgent";
import ForgotPassword from "../Pages/AuthPages/ForgotPassword/ForgotPassword";
import SpecificNeighbourhood from "../Components/SpecificNeighbourhood/SpecificNeighbourhood";
import Profile from "../Pages/Profile/Profile";
import BuildingGuidesPage from "../Pages/BuildingGuidesPage/BuildingGuidesPage";
import CityGuides from "../Pages/CityGuides/CityGuides";
import FindAnAgent from "../Pages/FindAnAgent/FindAnAgent";
import BuildingClassification from "../Pages/BuildingClassification/BuildingClassification";
import AgentProfile from "../Pages/AgentProfile/AgentProfile";
import ComingSoon from "../Components/ComingSoon/ComingSoon";
import DesirableNeighborhoods from "../Pages/DesirableNeighborhoods/DesirableNeighborhoods";
import SearchLandingPage from "../Pages/SearchLandingPage/SearchLandingPage";
import Error404 from "../Components/ErrorBoundaries/Error404";


function AppParentComponent() {

  const renderLayout = (component, showFooter = true, showPrivacy = false) => (
    <>
      <NavBar />
      {component}
      {showFooter ? <FooterComponent /> : null}
      {showPrivacy ? <TermsAndPolicy /> : null}
    </>
  );



  return (
    <ThemeProvider theme={customTheme}>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Routes>
          {/* Auth */}
          <Route
            path="/signin"
            element={renderLayout(<SignIn />, false, true)}
          />
          <Route path="/login" element={renderLayout(<Login />, false, true)} />
          <Route
            path="/forgot-password"
            element={renderLayout(<ForgotPassword />, false, true)}
          />
          <Route
            path="/register"
            element={renderLayout(<Register spacing={5} />, false, true)}
          />
          <Route
            path="/profile"
            element={renderLayout(<Profile />, true, false)}
          />

          {/* Auth */}

          <Route
            path="/"
            element={renderLayout(<LandingPageBody spacing={5} />)}
          />
          <Route
            path="/realtor"
            element={renderLayout(<LandingPageBody spacing={5} />)}
          />
          <Route
            path="/listing/:name/:id"
            element={renderLayout(<ListingDetailPage spacing={5} />)}
          />
          <Route
            path="/building/:name/:id"
            element={renderLayout(<BuildingDetailPage spacing={5} />)}
          />

          <Route
            path="/building-guides"
            element={renderLayout(<BuildingGuidesPage spacing={5} />)}
          />
          <Route
            path="/specificneighbourhood/:name"
            element={renderLayout(<SpecificNeighbourhood />)}
          />

          <Route path="/city-guides" element={renderLayout(<CityGuides />)} />
          <Route
            path="/"
            element={renderLayout(<LandingPageBody spacing={5} />)}
          />
          <Route
            path="/building-classification"
            element={renderLayout(<BuildingClassification />)}
          />

          <Route
            path="/become-an-agent"
            element={renderLayout(<BecomeAnAgent />)}
          />
          <Route
            path="/find-an-agent"
            element={renderLayout(<FindAnAgent />)}
          />
          <Route
            path="/agent-profile/:name"
            element={renderLayout(<AgentProfile />)}
          />
          <Route
            path="/new-developments"
            element={renderLayout(<ComingSoon />)}
          />
          <Route
            path="/property-management"
            element={renderLayout(<ComingSoon />)}
          />
          <Route path="/blog" element={renderLayout(<ComingSoon />)} />
          <Route path="/mortgages" element={renderLayout(<ComingSoon />)} />
          <Route
            path="/AREICO-institute"
            element={renderLayout(<ComingSoon />)}
          />
          <Route
            path="/citizenship-services"
            element={renderLayout(<ComingSoon />)}
          />
          <Route
            path="/international-properties"
            element={renderLayout(<ComingSoon />)}
          />
          <Route
            path="/desirableNeighborhood/:name/:id"
            element={renderLayout(<DesirableNeighborhoods />)}
          />
          <Route path="/search" element={renderLayout(<SearchLandingPage />)} />
          <Route
            path=":name/search"
            element={renderLayout(<SearchLandingPage />)}
          />

          <Route path="/commercial" element={renderLayout(<ComingSoon />)} />
          <Route path="/sell" element={renderLayout(<ComingSoon />)} />
          <Route
            path="/desirableNeighborhood/Burj Khalifa/:id"
            element={renderLayout(<ComingSoon />)}
          />
          <Route path="/comingsoon" element={renderLayout(<ComingSoon />)} />

          {/* always to be at the bottom */}
          <Route path="*" element={renderLayout(<Error404 />)} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
export default AppParentComponent;
