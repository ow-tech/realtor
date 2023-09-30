import React, { useState } from "react";
import { Grid, TextField, Link, useMediaQuery } from "@mui/material";
import ListingCardIc from "../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { isEmail, isMobilePhone } from "validator";
import CustomButton from "../Button/CustomButton";
import { contactAgent } from "../../network/apiServices";
import isEqual from "lodash/isEqual";
import {
  isMediumScreens,
  isSmallScreens,
} from "../../Constants/ConstantValues";
import { errorToast, successToast } from "../../utils/useToast";

function ContactAgent({ propertyDetails }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `I would like more information about the ${propertyDetails.propertyType} in ${propertyDetails.building} Reference Number  ${propertyDetails.referenceNumber}`
  );
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  let message_placeholder = `I would like more information about the ${propertyDetails.propertyType} in ${propertyDetails.building} Reference Number ${propertyDetails.referenceNumber}`;
  const isMediumScreen = useMediaQuery(isMediumScreens);
  const isSmallScreen = useMediaQuery(isSmallScreens);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || phoneError) {
      //alert user
      errorToast(`Email or phone number error.`);
    } else {
      let data = {
        // email: propertyDetails.owner.email,
        email: propertyDetails.owner.email,

        agentName: propertyDetails.owner.name,
        contactMessage: message,
        contactNumber: phone,
        contactEmail: email,
        referenceNumber: propertyDetails.referenceNumber,
        contactPersonName: name,
      };

      contactAgent(data)
        .then((data) => {
          if (!isEqual(data.data.status, "DELIVERED")) {
            //toast failure message
            errorToast(`${data.data.status} ${data.data.message}`);
          } else {
            //success scenario
            successToast(`${data.data.status}: ${data.data.message}`);
          }
        })
        .catch((error) => {
          console.log("Contact Agent Error: ", error);
          errorToast(`Contact Agent Error: ${error}`);
        });
      setEmail("");
      setPhone("");
      setMessage(message_placeholder);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (!isEmail(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
    if (!isMobilePhone(event.target.value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <Grid item xs={12}>
      <Grid
        container
        item
        xs={12}
        bgcolor={"black"}
        p={2}
        borderRadius={2}
        textAlign={"center"}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            item
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <TextField
                id="name"
                className="agentTextInput"
                type="text"
                hiddenLabel
                placeholder="John Doe"
                value={name}
                required={true}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setName(event.target.value)}
                size={
                  isSmallScreen ? "small" : isMediumScreen ? "normal" : "normal"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                className="agentTextInput"
                placeholder="example@abc.com"
                hiddenLabel
                type="email"
                value={email}
                error={emailError}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                required={true}
                helperText={emailError ? "Invalid email" : ""}
                FormHelperTextProps={{ disabled: true }}
                onChange={handleEmail}
                size={
                  isSmallScreen ? "small" : isMediumScreen ? "normal" : "normal"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                className="agentTextInput"
                placeholder="+971-234-567-89"
                hiddenLabel
                type="tel"
                value={phone}
                error={phoneError}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                required={true}
                helperText={phoneError ? "Invalid phone number" : ""}
                onChange={handlePhone}
                size={
                  isSmallScreen ? "small" : isMediumScreen ? "normal" : "normal"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="textbox"
                className="agentTextArea"
                hiddenLabel
                type="text"
                value={message}
                placeholder={message_placeholder}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                multiline
                maxRows={5}
                minRows={4}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item xs={8} mt={1}>
              <CustomButton
                customClassName="contactAgentSendMessage"
                dark={false}
                type="submit"
                text={"Send Message "}
                rightIcon={<ListingCardIc shape={"arrowRight"} />}
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} p={2} textAlign={"center"}>
        <Link href="/find-an-agent">
          <CustomButton
            dark={false}
            onClick={() => {
              // console.log("view all agents");
            }}
            text={"View all agents "}
            typographyVariant="DubaiRegular18"
            rightIcon={<ListingCardIc shape={"arrowRight"} />}
            fullWidth={true}
          />
        </Link>
      </Grid>
    </Grid>
  );
}
export default ContactAgent;
