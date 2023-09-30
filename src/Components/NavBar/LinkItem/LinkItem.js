
import { MenuItem, Typography } from "@mui/material";

function LinkItem(props) {
  const {  children, value, customClass, customOnClick } = props;


  return (
    <MenuItem
      variant="DubaiRegular16"
      id="linkItem"
      onClick={customOnClick}
      value={value}
      className={customClass}
    >
      {/* {console.log(value)} */}
      <Typography textAlign="center" variant="DubaiRegular16">
        {children}
      </Typography>
    </MenuItem>
  );
}

export default LinkItem;
