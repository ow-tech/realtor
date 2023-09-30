import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/main.css";
import "./Styles/footerStyles.css";
import "./Styles/headerStyles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ScrollToTopWrapper from "./Components/ScrollToTop/ScrollToTopWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <ScrollToTopWrapper>
        <App />
      </ScrollToTopWrapper>
    </AppProvider>
  </BrowserRouter>
);

reportWebVitals();
