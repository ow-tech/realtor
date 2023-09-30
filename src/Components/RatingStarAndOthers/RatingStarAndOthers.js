import React, { useState } from "react";
import { DarkFilledStarIcon, DarkHalfStarIcon, DarkEmptyStarIcon, LightFilledStarIcon, LightHalfStarIcon, LightEmptyStarIcon, pricing } from "../../Assets/SVG/Common/CommonSvgs";

const RatingStarAndOthers = ({ defaultValue, dark = false, stylingClass = null, pricingIcon = false }) => {
  const [rating, setRating] = useState(defaultValue || 0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="ratingComponent">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        let IconComponent = pricingIcon ? pricing : dark ? DarkEmptyStarIcon : LightEmptyStarIcon;

        if (starValue <= Math.floor(rating)) {
          IconComponent = pricingIcon ? pricing : dark ? DarkFilledStarIcon : LightFilledStarIcon;
        } else if (starValue === Math.ceil(rating)) {
          if (rating % 1 >= 0.8) {
            IconComponent = pricingIcon ? pricing : dark ? DarkFilledStarIcon : LightFilledStarIcon;
          } else if (rating % 1 >= 0.4) {
            IconComponent = pricingIcon ? pricing : dark ? DarkHalfStarIcon : LightHalfStarIcon;
          }
        }
        return (
          <span key={index} className={`${stylingClass} starSpacing`}>
            <IconComponent key={index} onClick={() => handleClick(starValue)} />
          </span>
        );
      })}
    </div>
  );
};

export default React.memo(RatingStarAndOthers);
