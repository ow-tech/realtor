import { useEffect } from "react";
import { MenuItem, ListItemIcon, Typography, Box,useMediaQuery } from "@mui/material";
import { ExpandMoreSharp, Check} from "@mui/icons-material";
import { FlagRenderValue } from "../FlagRenderValue/FlagRenderValue";
import { isMediumScreens } from "../../Constants/ConstantValues";


const SelectComponent = ({
  value,
  onChange,
  items,
  currencyOptionsClassName,
  customClass = null,
  currencyButtonWrapperCustomClass,
  selectComponentWrapperCustomSelect
}) => {
  const isMediumScreen =useMediaQuery(isMediumScreens)
  useEffect(() => {}, [value]);

  const handleOptionClick = (option) => {
    // setSelectedOption(option);
    // console.log(option)

    onChange(option);
    
  };
  // console.log(currencyOptionsClassName)
  const classNameCustom = currencyOptionsClassName ? currencyOptionsClassName : "selectOptionsWrapper";

  return (
    <div className={`selectComponentWrapper ${selectComponentWrapperCustomSelect ? selectComponentWrapperCustomSelect : 'normalSelectComponentWrapper'} ${customClass ? customClass : ""} `}>
      <div className=  {`selectButtonWrapper ${currencyButtonWrapperCustomClass} `}>
        <button className="selectButton">
          {<FlagRenderValue value={value} />}
        </button>
        <ExpandMoreSharp className="expandMoreSharp" />
      </div>
      <div
        className={
          `${classNameCustom} ${isMediumScreen ? 'elevateSelectComponent' : ""}`
        }
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            className={`menuItem`}
            onClick={() => handleOptionClick(item.value)}
          >
            {item.value === value && (
              <ListItemIcon>
                <Check />
              </ListItemIcon>
            )}
            <Box className="itemBox">
              {item.icon}
              <Typography
                component="span"
                variant="DubaiRegular16"
                className="itemLabel"
              >
                {item.label}
              </Typography>
              {item.symbol && (
                <Typography component="span" variant="DubaiRegular16">
                  ({item.symbol})
                </Typography>
              )}
            </Box>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};
export default SelectComponent;
