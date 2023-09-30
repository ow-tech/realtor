import { Typography } from "@mui/material";
import { ExpandMoreSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ListingCardIcon from "../../../Assets/SVG/ListingCardIcons/ListingCardIcons";

function MenuDropdown({ customClass, buttonTitle, menuItems, titleIcon, iconVariant, children }) {
  return (
    <>
  
    <ul className="ulWrapper">
        <li className="li">
          <div className={`divWrapper ${customClass}`}>
            {titleIcon && <ListingCardIcon shape={titleIcon} variant={iconVariant} />}
            <Typography variant="DubaiRegular16">{buttonTitle}</Typography>
            <ExpandMoreSharp />
          </div>

          <ul className="ulChild">
            {menuItems.map((menuItem, index) => (
              <Link key={index} to={menuItem.link ? menuItem.link : "#"} className="headerLink">
                <li className="liChild">
                  <Typography variant="DubaiRegular16">{menuItem.title ? menuItem.title : menuItem}</Typography>
                </li>
              </Link>
            ))}
            {children}
          </ul>
        </li>
      </ul>


    
    </>
  );
}
export default MenuDropdown;
