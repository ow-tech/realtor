import React, { useState, useEffect, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Container, Typography, Grid } from "@mui/material";
import { ScrollDownBtnIcon } from "../../Assets/SVG/Common/CommonSvgs";
import _ from "lodash"; // Import lodash library

import AppContext from "../../context/AppContext";
import { getUserDetails } from "../../network/apiServices";
import MySettings from "./MySettings/MySettings";
// import SearchNotifications from "./SearchNotifications/SearchNotifications";
import ChangePassword from "./ChangePassword/ChangePassword";
// import DeleteAccount from "./DeleteAccount/DeleteAccount";
import SavedProperties from "./SavedProperties/SavedProperties";
import MyAgents from "./MyAgents/MyAgents";
import SavedSearches from "./SavedSearches/SavedSearches";
import SavedBuildings from "./SavedBuildings/SavedBuildings";
import { cdnPath } from "../../Constants/StaticPagesConstants";

const Profile = () => {
  const context = useContext(AppContext);

  const { userObj, userPreferences, setUserPreferences } = context;

  const [selectedTab, setSelectedTab] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("My Settings");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserDetails({ email: userObj?.email })
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setUserPreferences(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userObj]);

  const handleTabClick = (index) => {
    if (_.isEqual(selectedTab, index)) {
      setMenuOpen(false);
    }
    setSelectedTab(index);
  };

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  const handleClick = (event) => {
    setSelectedMenuItem(event.target.innerText);
    setMenuOpen(false);
  };

  return (
    <>
      {!loading && (
        <Container className="profileContainer">
          <Box className="profilePic">
            <LazyLoadImage
              src={`${cdnPath}/assets/Avatar.jpg`}
              height={"25%"}
              width={"15%"}
            />
            <Typography variant="GothamBlack24Bold">
              {userPreferences?.userDetails?.firstName}{" "}
              {userPreferences?.userDetails?.lastName}
            </Typography>
          </Box>

          <Box className="profileTabs">
            <Grid container>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 0) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(0)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className=" menuDropdownButton">
                    <span>
                      <Typography variant="DubaiRegular18" mr={1}>
                        Menu
                      </Typography>
                      <ScrollDownBtnIcon />
                    </span>
                    {menuOpen && (
                      <div className="menuDropdown">
                        <span onClick={handleClick} className="profileMenuItem">
                          <Typography variant="DubaiRegular16">
                            My Settings
                          </Typography>
                        </span>
                        {/* <span onClick={handleClick} className="profileMenuItem">
                        <Typography variant="DubaiRegular16">
                          Search Notifications
                        </Typography>
                      </span> */}
                        <span onClick={handleClick} className="profileMenuItem">
                          <Typography variant="DubaiRegular16">
                            Change Password
                          </Typography>
                        </span>
                        {/* <span onClick={handleClick} className="profileDeleteBtn">
                        <Typography variant="DubaiRegular16">
                          Delete Account
                        </Typography>
                      </span> */}
                      </div>
                    )}
                  </span>
                </div>
              </Grid>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 1) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <Typography variant="DubaiRegular18">
                    Saved Properties
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 2) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <Typography variant="DubaiRegular18">
                    Saved Buildings
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 3) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <Typography variant="DubaiRegular18">
                    Saved Searches
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 4) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(4)}
                >
                  <Typography variant="DubaiRegular18">
                    Around the Block
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={4} lg={1.8}>
                <div
                  className={`tabItem profileTab ${
                    _.isEqual(selectedTab, 5) ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(5)}
                >
                  <Typography variant="DubaiRegular18">My Agents</Typography>
                </div>
              </Grid>
            </Grid>
          </Box>

          {selectedTab !== 0 && (
            <>
              {selectedTab === 1 && <SavedProperties />}
              {selectedTab === 2 && <SavedBuildings />}
              {selectedTab === 3 && <SavedSearches />}
              {selectedTab === 4 && (
                <Typography mt={4}>No record found!</Typography>
              )}
              {selectedTab === 5 && <MyAgents />}
            </>
          )}

          {_.isEqual(selectedTab, 0) &&
            _.isEqual(selectedMenuItem, "My Settings") && <MySettings />}
          {/* {_.isEqual(selectedTab, 0) &&
            _.isEqual(selectedMenuItem, "Search Notifications") && (
              <SearchNotifications />
            )} */}
          {_.isEqual(selectedTab, 0) &&
            _.isEqual(selectedMenuItem, "Change Password") && (
              <ChangePassword />
            )}
          {/* {_.isEqual(selectedTab, 0) &&
            _.isEqual(selectedMenuItem, "Delete Account") && <DeleteAccount />} */}
        </Container>
      )}
    </>
  );
};

export default Profile;
