import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NextArrow, BackArrow } from "../../Assets/SVG/Carousel/CarouselIcons";
import isBoolean from "lodash/isBoolean";
import { useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";

const TestSlider = ({
  handleBack,
  handleNext,
  images,
  activeStep,
  width,
  height,
  availableGrids,
  customState = null,
  setCustomState = null,
  customClass = "",
}) => {
  const navigate = useNavigate();
  const [newHeight, setNewHeight] = useState("300");
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    initial: (direction) => {
      return {
        opacity: 0,
        x: direction > 0 ? "-1000" : "1000",
      };
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => {
      return {
        opacity: 0,
        x: direction > 0 ? "1000" : "-1000",
        transition: {
          opacity: { duration: 0.2 },
        },
      };
    },
    transition: {
      opacity: { duration: 2 },
    },
  };

  const handleOverlayClick = () => {
    if (isBoolean(customState)) {
      setCustomState((prev) => !prev);
    } else {
      navigate(customState);
    }
  };

  const updateHeight = () => {
    const newWidth = window.innerWidth;
    if (newWidth < 600) {
      setNewHeight((newWidth * 9) / 16);
    } else if (newWidth < 900) {
      let widths = newWidth / 2;
      setNewHeight((widths * 4) / 6);
    } else {
      let widths = availableGrids / 12;
      widths = widths * newWidth;
      if (isEqual(availableGrids, 2.4)) {
        setNewHeight((widths * 5) / 4.1);
      } else if (isEqual(availableGrids, 3)) {
        setNewHeight((widths * 4) / 5.5);
      } else if (isEqual(availableGrids, 4)) {
        setNewHeight((widths * 4) / 6.5);
      } else {
        setNewHeight((widths * 9) / 16);
      }
    }
  };

  useEffect(() => {
    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [availableGrids]);

  const imgPath = images[activeStep]?.imgPath;
  const separator = imgPath && imgPath.includes("?") ? "&" : "?";
  const src = `${imgPath}${separator}tr=w-${width},h-${height}`;

  return (
    <div className={`${customClass} carouselBox`}>
      <div className="imageContainer" style={{ backgroundColor: "#153162" }}>
        <motion.img
          style={{ height: `${newHeight}px` }}
          key={activeStep}
          className="homePageBackgroundImage"
          src={src}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideVariants}
          transition="transition"
          custom={direction}
        />
        <div className="overlay" onClick={handleOverlayClick} />
      </div>
      <motion.div
        className="carouselNavigationLeftBtn left"
        whileHover="hover"
        onClick={() => {
          handleBack();
          setDirection(-1);
        }}
      >
        <BackArrow />
      </motion.div>
      <motion.div
        className="carouselNavigationRightBtn right"
        whileHover="hover"
        onClick={() => {
          handleNext();
          setDirection(1);
        }}
      >
        <NextArrow />
      </motion.div>
    </div>
  );
};

export default TestSlider;
