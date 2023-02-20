import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      main: "#165643",
      boxMain: "#F4FAFB",
      buttonMain: "#AFDECC",
      iconMain: "#000000",
      smallButton: "#2D7C65",
      name: "background",
    },

    text: {
      main: "#165643",
      secondary: "#AFFFE0",
      navbarSec: "#B6B6B6",
      para: "#000000",
      subPara: "#978E8E",
      smText: "#2D7C65",
      whiteType: "#FFFFFF",
      name: "text",
    },
  },
  typography: {
    fontFamily: ["DM Serif Display", "Gontserrat"].join(","),
    h1: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "61px",
      lineHeight: "91px",
      fontWeight: "400",
    },
    h2: {
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "49px",
      lineHeight: "67px",
      fontWeight: "400",
    },
    h3: {
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "45px",
      lineHeight: "62px",
      fontWeight: "400",
    },
    h4: {
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "38px",
      lineHeight: "59px",
      fontWeight: "400",
      marginLeft: ".5em",
    },
    h5: {
      fontFamily: "DM Serif Display",
      fontStyle: "italic",
      fontSize: "26px",
      lineHeight: "44px",
      fontWeight: "400",
    },
    h6: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "104.4%;",
      fontWeight: "400",
    },
    body1: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "22px",
      lineHeight: "27px",
      fontWeight: "400",
      marginLeft: "1em",
    },

    body2: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "400",
      // marginLeft: "1em",
    },
    button: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "11px",
      lineHeight: "13px",
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "7px",
      lineHeight: "9px",
      fontWeight: "400",
    },
    subtitle2: {
      fontFamily: "Gontserrat",
      fontStyle: "normal",
      fontSize: "17px",
      lineHeight: "21px",
      fontWeight: "400",
      marginTop: 0,
      marginLeft: "0.5em",
    },
  },
  shape: {
    borderRadius: "25px",
    borderRadiusButton: "50px",
    borderRadiusButton2: "30px",
  },
});

export default theme;
