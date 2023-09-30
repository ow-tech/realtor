import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Divider,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import TextRadioGroup from "./TextRadioGroup";
import MultipleChecklist from "./MultipleChecklist";
import { propertyAmenitiesArray } from "../../../Constants/ConstantValues";

const MoreFilterPopup = ({
  open,
  onClose,
  status,
  setStatus,
  areaType,
  setAreaType,
  minArea,
  setMinArea,
  maxArea,
  setMaxArea,
  checkedItems,
  setCheckedItems,
  vacant,
  setVacant,
  cryptoAccept,
  setCryptoAccept,
  instantViewing,
  setInstantViewing,
  fetchFilteredSearchData,
  showResults,
  setShowResults,
}) => {
  const completionStatus = ["Any", "Ready", "Off-plan"];
  const areaTypes = ["sqft", "m2"];

  useEffect(() => {
    if (showResults) {
      fetchFilteredSearchData();
      onClose();
      setShowResults(false);
    }
  }, [showResults, fetchFilteredSearchData, onClose, setShowResults]);

  const handleReset = () => {
    setStatus("Any");
    setAreaType("sqft");
    setMinArea("");
    setMaxArea("");
    setCheckedItems({});
    setVacant(false);
    setCryptoAccept(false);
    setInstantViewing(false);
  };

  const handleStatus = (value) => {
    setStatus(value);
  };
  const handleAreaType = (value) => {
    setAreaType(value);
  };

  const handleVacantToggle = () => {
    setVacant((prevChecked) => !prevChecked);
  };

  const handleCryptoAcceptToggle = () => {
    setCryptoAccept((prevChecked) => !prevChecked);
  };

  const handleInstantViewingToggle = () => {
    setInstantViewing((prevChecked) => !prevChecked);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="moreFilterDialogue"
    >
      <div className="moreFilterDivContainer">
        <div className="moreFilterGridHeader">
          <div className="flexGrow1">
            <Typography variant="GothamBlack20Bold">More Filters</Typography>
          </div>
          <CloseIcon onClick={onClose} className="cursorPointer" />
        </div>
        <DialogContent className="moreFilterDialogContent">
          <div className="moreFilterContentDiv">
            <Typography variant="DubaiRegular18Bold">
              Completion Status
            </Typography>
            <TextRadioGroup
              listArray={completionStatus}
              selected={status}
              handleList={handleStatus}
            />
            <Divider orientation="horizontal" className="dividerMb-20" />

            <Typography variant="DubaiRegular18Bold">Property Area</Typography>
            <TextRadioGroup
              listArray={areaTypes}
              selected={areaType}
              handleList={handleAreaType}
              numberInput
              min={minArea}
              setMin={setMinArea}
              max={maxArea}
              setMax={setMaxArea}
            />

            <Divider orientation="horizontal" className="dividerMb-20" />

            <Typography variant="DubaiRegular18Bold">
              Property Amenities
            </Typography>
            <MultipleChecklist
              list={propertyAmenitiesArray}
              checkedItems={checkedItems}
              setCheckedItems={setCheckedItems}
            />

            <Divider orientation="horizontal" className="dividerMb-20" />

            <Typography variant="DubaiRegular18Bold">
              Additional Requirements
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} pb={1} className="alignCenter">
                <label className="checkbox alignCenter">
                  <input
                    type="checkbox"
                    checked={vacant}
                    onChange={handleVacantToggle}
                  />
                  <Typography variant="DubaiRegular16">
                    Vacant on transfer
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={12} sm={6} md={4} pb={1} className="alignCenter">
                <label className="checkbox alignCenter">
                  <input
                    type="checkbox"
                    checked={cryptoAccept}
                    onChange={handleCryptoAcceptToggle}
                  />
                  <Typography variant="DubaiRegular16">
                    Seller accepts cryptocurrency
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={12} sm={6} md={4} pb={1} className="alignCenter">
                <label className="checkbox alignCenter">
                  <input
                    type="checkbox"
                    checked={instantViewing}
                    onChange={handleInstantViewingToggle}
                  />
                  <Typography variant="DubaiRegular16">
                    Instantly available for viewing
                  </Typography>
                </label>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Grid container className="moreFilterGridFooter">
          <Grid item xs={3} sm={1} mr={1}>
            <Button onClick={handleReset}>Reset</Button>
          </Grid>
          <Grid item xs={5} sm={2}>
            <CustomButton
              text={`Show Results`}
              dark={true}
              size="small"
              customClassName="searchLandingBtn"
              typographyVariant="DubaiRegular14"
              rightIcon={
                <ListingCardIcon shape={"arrowRight"} shapeColor={"black"} />
              }
              onClick={() => setShowResults(true)}
            />
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default MoreFilterPopup;
