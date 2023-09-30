import React from "react";
import "./Styles/main.css";
import "./Styles/footerStyles.css";
import "./Styles/headerStyles.css";
import "./Styles/searchMap.css";
import "./Styles/skeleton.css";
import "./Styles/carouselNewStyles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppParentComponent from "../src/Routes/AppParentComponent";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "./Components/ErrorBoundaries/ErrorBoundaries";

function App() {

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <div className="App">
        <ToastContainer />
        <AppParentComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
