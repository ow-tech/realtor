import React,{useState} from "react";
import { Grid, TextField } from "@mui/material";
import CustomButton from "../../../../Components/Button/CustomButton";
import { ButtonRightArrow } from "../../../../Assets/SVG/Common/CommonSvgs";

const SubscribeForm = ({ email, handleInputChange, error, handleSubmit }) => {
  const [exclusivesButtonHovered, setExclusivesButtonHovered] = useState(true);


  const handleMouseEvent = () => {
    setExclusivesButtonHovered(!exclusivesButtonHovered);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7} md={7}>
          <TextField
            className="subscribeEmailInput"
            value={email}
            placeholder="Please enter your email address"
            onChange={handleInputChange}
            error={error}
            helperText={error ? "Invalid email" : ""}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomButton
            type="submit"
            text="Subscribe"
            rightIcon={<ButtonRightArrow />}
            fullWidth
            customClassName={"subscribeBtnLanding"}
            textIconSpacingClass={2}
            onMouseEnter={handleMouseEvent}
            onMouseLeave={handleMouseEvent}
            dark={exclusivesButtonHovered}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscribeForm;
