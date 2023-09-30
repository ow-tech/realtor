import React, { useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import SubscribeForm from "./SubscribeForm/SubscribeForm";
import isEmail from "validator/lib/isEmail";
import { subscribeToNewsletter } from "../../../network/apiServices";
import { isEqual } from "lodash";
import { errorToast, successToast, infoToast } from "../../../utils/useToast";

const LandingPageSubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail(email)) {
      let data = {
        email: email,
      };

      subscribeToNewsletter(data)
        .then((res) => {
         
          if (isEqual(res.data.message, "Email already exists")) {
            //toast failure message
            infoToast(res.data.message);
          } else {
            //success scenario
            successToast(res.data.message);
          }
        })
        .catch((error) => {
          errorToast(error.data.message?error.data.message:`Error in Subscribing`)
        });
      setEmail("");
    } else {
      setError(true);
    }
  };

  return (
    <Container disableGutters={true} className="subscribeSectionContainer">
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} sm={2} />
        <Grid item xs={12} sm={5}>
          <Box className="boxColAlign">
            <Typography variant="GothamBlack26">Subscribe</Typography>
            <Typography variant="DubaiRegular20">
              For regular real estate updates, subscribe to our newsletter.
            </Typography>
          </Box>

          <SubscribeForm
            email={email}
            handleInputChange={handleInputChange}
            error={error}
            handleSubmit={handleSubmit}
          />
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </Container>
  );
};

export default LandingPageSubscribeSection;
