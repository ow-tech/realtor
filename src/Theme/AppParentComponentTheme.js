import { createTheme } from "@mui/material/styles";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#153162",
      light: "#ffffff",
      transparent: "red",
    },
  },

  components: {
    // Name of the component

    MuiTypography: {
    
      styleOverrides: {
        
        // h1: {
        //   
        //   fontSize: "60px",
        // },
        h2: {
          
          fontSize: "40px",
        },

        h6: {
          
        },

        p2: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
          fontDisplay: "fallback",
        },
        p3: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
          fontDisplay: "fallback",
        },
        body1: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "25px",
          fontDisplay: "fallback",
        },
        body2: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
          fontDisplay: "fallback",
        },
        body3: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
          fontDisplay: "fallback",
        },
        body4: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
          fontDisplay: "fallback",
        },

        GothamBlack13: {
          
          fontSize: "13px",
          "@media (max-width: 890px)": {
            fontSize: "11px",
            fontDisplay: "fallback",
          },
          "@media (max-width: 500px)": {
            fontSize: "9px",
            fontDisplay: "fallback",
          },
        },
        GothamBlack18: {
          
          fontSize: "18px",
          "@media (max-width: 890px)": {
            fontSize: "15px",
          },
          "@media (max-width: 500px)": {
            fontSize: "12px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack21: {
          
          fontSize: "21px",
          "@media (max-width: 890px)": {
            fontSize: "18px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack20Bold: {
          
          fontSize: "20px",
          fontWeight: "900",
          "@media (max-width: 890px)": {
            fontSize: "16px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack22: {
          
          fontSize: "22px",
          "@media (max-width: 890px)": {
            fontSize: "18px",
          },
          fontDisplay: "fallback",
        },

        GothamBlack24: {
          
          fontSize: "24px",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack24Bold: {
          
          fontSize: "24px",
          fontWeight: "900",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack25: {
          
          fontSize: "25px",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack26: {
          
          fontSize: "26px",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack27: {
          
          fontSize: "27px",
          "@media (max-width: 890px)": {
            fontSize: "21px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack30: {
          
          fontSize: "30px",
          "@media (max-width: 890px)": {
            fontSize: "26px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack32: {
          
          fontSize: "32px",
          "@media (max-width: 890px)": {
            fontSize: "27px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack36: {
          
          fontSize: "36px",
          "@media (max-width: 890px)": {
            fontSize: "28px",
          },
          "@media (max-width: 576px)": {
            fontSize: "22px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack38Bold: {
          
          fontSize: "38px",
          fontWeight: "900",
          "@media (max-width: 890px)": {
            fontSize: "28px",
            fontDisplay: "fallback",
          },
          "@media (max-width: 500px)": {
            fontSize: "24px",
            fontDisplay: "fallback",
          },
        },
        GothamBlack40: {
          
          fontSize: "40px",
          "@media (max-width: 890px)": {
            fontSize: "24px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack45: {
          
          fontSize: "45px",
          "@media (max-width: 920px)": {
            fontSize: "38px",
          },
          "@media (max-width: 890px)": {
            fontSize: "30px",
          },
          "@media (max-width: 475px)": {
            fontSize: "22px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack45Bold: {
          
          fontSize: "45px",
          fontWeight: "900",
          "@media (max-width: 920px)": {
            fontSize: "38px",
          },
          "@media (max-width: 890px)": {
            fontSize: "30px",
          },
          "@media (max-width: 475px)": {
            fontSize: "22px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack50Bold: {
          
          fontSize: "50px",
          fontWeight: "900",
          "@media (max-width: 920px)": {
            fontSize: "38px",
          },
          "@media (max-width: 890px)": {
            fontSize: "30px",
          },
          "@media (max-width: 475px)": {
            fontSize: "22px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack60: {
          
          fontSize: "60px",
          "@media (max-width: 1200px)": {
            fontSize: "40px",
          },
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        GothamBlack60Bold: {
          
          fontSize: "60px",
          fontWeight: "900",
          "@media (max-width: 1200px)": {
            fontSize: "40px",
          },
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },

        AlwynNewRoundedRegular12: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "12px",
          fontDisplay: "fallback",
        },

        AlwynNewRoundedRegular12Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "12px",
          fontWeight: "bold",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular13: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "13px",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular13Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "13px",
          fontWeight: "bold",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular14: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
        },
        AlwynNewRoundedRegular14Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "14px",
          fontWeight: "bold",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular15: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "15px",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular15Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "15px",
          fontWeight: "bold",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular16: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "16px",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular16Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "16px",
          fontWeight: "bold",
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular18: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "18px",
          "@media (max-width: 890px)": {
            fontSize: "15px",
          },
          "@media (max-width: 385px)": {
            fontSize: "13px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular18Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "18px",
          fontWeight: "bold",
          "@media (max-width: 890px)": {
            fontSize: "15px",
          },
          "@media (max-width: 385px)": {
            fontSize: "13px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular20: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
          "@media (max-width: 890px)": {
            fontSize: "17px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular20Bold: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "20px",
          fontWeight: "bold",
          "@media (max-width: 890px)": {
            fontSize: "16px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular25: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "25px",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular28: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "28px",
          "@media (max-width: 890px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        AlwynNewRoundedRegular30: {
          fontFamily: "AlwynNewRounded-Regular",
          fontSize: "30px",
          "@media (max-width: 890px)": {
            fontSize: "25px",
          },
          fontDisplay: "fallback",
        },

        DubaiRegular10: {
          fontFamily: "DubaiRegular",
          fontSize: "10px",
          fontDisplay: "fallback",
        },
        DubaiRegular12: {
          fontFamily: "DubaiRegular",
          fontSize: "12px",
          "@media (max-width: 500px)": {
            fontSize: "10px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular14: {
          fontFamily: "DubaiRegular",
          fontSize: "14px",
          "@media (max-width: 500px)": {
            fontSize: "10px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular14Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "14px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "11px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular16ForFiltersBtns: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          "@media (max-width: 500px)": {
            fontSize: "14px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular16ForFilters: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          fontDisplay: "fallback",
        },
        DubaiRegular16: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          "@media (max-width: 500px)": {
            fontSize: "12px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular16Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "16px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "12px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular18: {
          fontFamily: "DubaiRegular",
          fontSize: "18px",
          "@media (max-width: 500px)": {
            fontSize: "15px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular18Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "18px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "15px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular20: {
          fontFamily: "DubaiRegular",
          fontSize: "20px",
          "@media (max-width: 500px)": {
            fontSize: "17px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular20Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "20px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "17px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular24: {
          fontFamily: "DubaiRegular",
          fontSize: "24px",
          "@media (max-width: 500px)": {
            fontSize: "16px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular24Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "24px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "16px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular30Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "30px",
          fontWeight: "Bold",
          "@media (max-width: 500px)": {
            fontSize: "20px",
          },
          fontDisplay: "fallback",
        },
        DubaiRegular32Bold: {
          fontFamily: "DubaiRegular",
          fontSize: "32px",
          fontWeight: "bold",
          "@media (max-width: 500px)": {
            fontSize: "26px",
          },
          fontDisplay: "fallback",
        },
        footerSocialIcon: {
          fontSize: "12px",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: "#ffffff !important",
          backgroundColor: "#153162",
          fontFamily: "DubaiRegular16",
        },
      },
    },

    MuiTreeView: {
      styleOverrides: {
        root: {
          backgroundColor: "#153162",
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: "AlwynNewRoundedRegular14",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: "54px",
          letterSpacing: "0",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#153162",
          },
          "&.customButtonDark": {
            height: "2.3rem",
            color: "#fff",
            backgroundColor: "#153162",
          },
          "&.customButtonDark  svg": {
            fill: "#fff",
          },
          "&.customButtonLight": {
            height: "2.3rem",
            color: "#000",
            backgroundColor: "#fff",
          },
          "&.customButtonLight  svg": {
            fill: "#000",
          },
          "&.indicator": {
            fontFamily: "DubaiReqular",
            fontSize: "18px",
          },
          //   "&.Mui-disabled": {
          //     backgroundColor:'white', // Customize the disabled background color here
          //     color: 'white', // Custo
          // },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          height: "54px",
          letterSpacing: "0",

          fontSize: "16px",
          fontFamily: "DubaiRegular",
        },
        select: {
          "& .MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-select": {
            height: "0",
          },
        },
        icon: {
          color: "#FFFFFF",
          transition: "none",
          transform: "none",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#153162",
            color: "#FFFFFF",
          },
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {},
      },
    },

    MuiMenu: {
      styleOverrides: {},
    },

    MuiDrawer: {
      styleOverrides: {
        root: {},
      },
    },

    MuiPopper: {
      styleOverrides: {
        root: {
          // position: "relative",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          zIndex: 1099,
          borderRadius: 0,
          "& .MuiMenu-list": {
            padding: "0px 0",
          },
          "& .MuiMenuItem-root.Mui-selected": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
        },
        dot: {
          height: "12px",
          width: "12px",
          backgroundColor: "transparent",
        },
        positionStatic: {
          paddingTop: "1.5rem",
        },
      },
    },
  },
});

export default customTheme;
