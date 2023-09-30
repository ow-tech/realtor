import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import React, { useState, useContext } from "react";
import InfoIconDescription from "../../../Components/InfoIconDescription/InfoIconDescription";
import { InfoIcon } from "../../../Assets/SVG/Common/CommonSvgs";
import CustomButton from "../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../Assets/SVG/Common/CommonSvgs";
import { mortgage } from "../../../Constants/ConstantValues";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import AppContext from "../../../context/AppContext";
import { convertCurrency, calculatePercentage } from "../../../utils/utility";

function MortgageSection(property) {
  // const [purchases, setPurchases] =useState([])
  const { conversionRates, toCurrency, selectedCurrency,selectedCountryCurrency } = useContext(AppContext);

  const mortgageLabels = ["Transfer Fee", "Title Deed Fee", "Trustee Fee", "Agency Fee", "NOC Charges", "Total"];

  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    true, // Hover state for button at index 0
    true, // Hover state for button at index 1
    true, // Hover state for button at index 2
  ]);

  const handleMouseEvent = (index) => {
    setExclusivesButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };

  let purchases = [
    [
      convertCurrency(conversionRates, toCurrency, selectedCurrency, property.transferFee ? property.transferFee : "0",selectedCountryCurrency),
      property.transferFeePercentage ? property.transferFeePercentage : "N/A",
      //  calculatePercentage(property.transferFee, property.purchasePrice)
    ],
    [
      convertCurrency(conversionRates, toCurrency, selectedCurrency, property.titleDeedFee ? property.titleDeedFee : "0",selectedCountryCurrency),
      property.titleDeedPercentage ? property.titleDeedPercentage : "N/A",
      // calculatePercentage(property.titleDeedFee, property.purchasePrice)
    ],
    [
      convertCurrency(conversionRates, toCurrency, selectedCurrency, property.trusteeFee ? property.trusteeFee : "0",selectedCountryCurrency),
      property.trusteeFeePercentage ? property.trusteeFeePercentage : "N/A",
      // calculatePercentage(property.trusteeFee, property.purchasePrice)
    ],
    [
      convertCurrency(conversionRates, toCurrency, selectedCurrency, property.agencyFee ? property.agencyFee : "0",selectedCountryCurrency),
      property.agencyFeePercentage ? property.agencyFeePercentage : "N/A",
      // calculatePercentage(property.agencyFee, property.purchasePrice)
    ],
    [
      convertCurrency(conversionRates, toCurrency, selectedCurrency, property.nocCharges ? property.nocCharges : "0",selectedCountryCurrency),
      property.nocChargesPercentage ? property.nocChargesPercentage : "N/A",
      // calculatePercentage(property.agencyFee, property.purchasePrice)
    ],
  ];
  // console.log(purchases)

  return (
    <>
      <Box id="mortgageSection" className="mortgageWrapper">
        <Grid container justifyContent="center" spacing={6}>
          <Grid item>
            {/* <Typography variant="DubaiRegular24Bold">Mortgage</Typography> */}
            {/* <Grid container spacing={2}>
              <Grid item xs className="serviceChargeWithIcon">
                <Typography variant="DubaiRegular24Bold">{mortgage.pricePerMonth}</Typography>

                <Box className="serviceChargeInfoIcon">
                  <div className="tagWithInfoIconContainer">
                    <InfoIcon />
                    <div className="tagWithInfoIconTextBox">
                      <InfoIconDescription
                        heading={"Principal and Interest"}
                        headingColor={"#777575"}
                        description={
                          "In a normal principal + interest loan, the principal (the original amount borrowed) is divided into equal monthly installments, and the interest (the fee charged for borrowing) is calculated on the outstanding balance of the principal every month."
                        }
                      />
                    </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Typography variant="DubaiRegular16Bold">
                {`${mortgage.totalAnnualPaymentDuration}year fixed, ${mortgage.percentageInterest} Interest, ${mortgage.paercentageDownPayment}Down Payment`}
             
              </Typography>
              <CustomButton
                text={"Find out how much you can borrow"}
                rightIcon={<ButtonRightArrow />}
                onMouseEnter={() => handleMouseEvent(0)}
                onMouseLeave={() => handleMouseEvent(0)}
                dark={exclusivesButtonHovered[0]}
                variant="outlined"
                customClassName="viewAllExclusiveButton"
              />
              <CustomButton
                text={"Calculate your mortgage"}
                rightIcon={<ButtonRightArrow />}
                onMouseEnter={() => handleMouseEvent(1)}
                onMouseLeave={() => handleMouseEvent(1)}
                dark={exclusivesButtonHovered[1]}
                variant="outlined"
                customClassName="viewAllExclusiveButton"
              />
              <CustomButton
                text={"Get your pre-approval for this property"}
                rightIcon={<ButtonRightArrow />}
                onMouseEnter={() => handleMouseEvent(2)}
                onMouseLeave={() => handleMouseEvent(2)}
                dark={exclusivesButtonHovered[2]}
                variant="outlined"
                customClassName="viewAllExclusiveButton"
              />
            </Stack> */}
          </Grid>
          <Grid item xs={6}>
            <Box className="purchaseFees">
              <Stack spacing={2}>
                <Typography variant="DubaiRegular24Bold" className="purchaseFeeTypography">
                  Purchase Fees
                </Typography>
                <Grid container justifyContent="center">
                  {mortgageLabels.map((label, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={5} className="serviceChargeWithIcon" key={index}>
                        <Typography variant="DubaiRegular18">{label}</Typography>
                        {mortgage.mortgageFees[index][2] ? (
                          <Box className="serviceChargeInfoIcon">
                            <div className="tagWithInfoIconContainer">
                              <ListingCardIcon shape={"infoCircle"} variant="light" />
                              <div className="tagWithInfoIconTextBox">
                                <InfoIconDescription
                                  heading={"Principal and Interest"}
                                  headingColor={"#777575"}
                                  description={
                                    "In a normal principal + interest loan, the principal (the original amount borrowed) is divided into equal monthly installments, and the interest (the fee charged for borrowing) is calculated on the outstanding balance of the principal every month."
                                  }
                                />
                              </div>
                            </div>
                          </Box>
                        ) : null}
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="DubaiRegular18">{purchases && purchases[index] && purchases[index][0]}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="DubaiRegular18">{purchases && purchases[index] && purchases[index][1]}</Typography>
                      </Grid>

                      <Divider orientation="horizontal" flexItem className="mortgageDivider" />
                    </React.Fragment>
                  ))}
                </Grid>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MortgageSection;
