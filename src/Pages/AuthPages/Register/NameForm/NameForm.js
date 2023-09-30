import React,{useState} from "react";
import { TextField, Stack, FormHelperText, Typography,useMediaQuery  } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import ListingCardIcon from "../../../../Assets/SVG/ListingCardIcons/ListingCardIcons";
import { Link } from "react-router-dom";
import { isMediumScreens,isExtraSmallScreens } from "../../../../Constants/ConstantValues";

const NameForm = ({ fname, lname, formErrors, handleInputChange, handleSubmitRegisterNames, ButtonRightArrow }) => {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState([
    false, // Hover state for button at index 0
    false, // Hover state for button at index 1
  ]);
  const handleMouseEvent = (index) => {
    setExclusivesButtonHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = !updatedHovered[index];
      return updatedHovered;
    });
  };
  

  const isMediumScreen = useMediaQuery(isMediumScreens);
  const isExtraSmallScreen = useMediaQuery(isExtraSmallScreens);

  return (
    <form onSubmit={handleSubmitRegisterNames} width={isMediumScreen?'75%':"25%"} className="authForm">
      <Stack spacing={2}>
        <Stack direction={isExtraSmallScreen?'column':"row"} spacing={2} justifyContent="center">
          <TextField placeholder="First name" id="firstName" name="fname" fullWidth size="small" value={fname} onChange={handleInputChange} />
          <TextField placeholder="Last name" id="lastName" name="lname" fullWidth size="small" value={lname} onChange={handleInputChange} />
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="flex-start" className="signUpFormErrorsWrapper">
          {formErrors.fnameError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>First name should not be empty.</FormHelperText>
            </>
          )}
          {formErrors.lnameError && !formErrors.fnameError && (
            <>
              <ListingCardIcon shape="exclamationError" />
              <FormHelperText error>Last name should not be empty.</FormHelperText>
            </>
          )}
        </Stack>
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          // mt={1}
        >
          <CustomButton text="Continue" type="submit" rightIcon={<ButtonRightArrow />} dark={exclusivesButtonHovered[0]} variant="outlined" 
           onMouseEnter={() => handleMouseEvent(0)}
           onMouseLeave={() => handleMouseEvent(0)}
          customClassName="signInButton" />
          <div className="registerAndloginDivMargin">
            <Typography variant="DubaiRegular18">Already have an account? </Typography>

            <Link className="loginLinkLight" to="/login">
              <Typography variant="DubaiRegular18"> Login</Typography>
            </Link>
          </div>
        </Stack>
      </Stack>
    </form>
  );
};

export default NameForm;
