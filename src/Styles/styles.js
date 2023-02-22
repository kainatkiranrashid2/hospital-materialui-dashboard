import { Box, Button, Grid, Typography } from "@material-ui/core";
import { createTheme, useTheme, styled } from "@material-ui/core/styles";

export const StyledBox = styled(Box)((props) => ({
  backgroundColor: props.theme.palette.background.boxMain,
  borderRadius: "25px",
}));
export const WhiteBox = styled(Box)((props) => ({
  backgroundColor: (props) => props.theme.palette.text.whiteType,
  borderRadius: "25px",
  padding: ".5em",
  margin: ".25em",
  marginTop: "1em",
}));

export const WelcomeTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.main,
}));
export const SecondaryTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.secondary,
}));
export const GreenButton = styled(Button)((props) => ({
  background: props.theme.palette.background.smallButton,
  borderRadius: "34px",
}));
export const WhiteTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.whiteType,
}));
export const SideBox = styled(Box)((props) => ({
  background: props.theme.palette.text.main,
  borderRadius: "25px",
}));
export const GreenTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.smText,
  marginLeft: "1.2em",
}));
export const MainTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.main,
  // marginLeft: "1.2em",
}));
export const LightGreenBox = styled(Box)((props) => ({
  backgroundColor: props.theme.palette.background.buttonMain,
  borderRadius: "25px",
}));
export const BlackTypgraphy = styled(Typography)((props) => ({
  color: props.theme.palette.text.para,
  // marginLeft: "1.2em",
}));
export const GreyTypography = styled(Typography)((props) => ({
  color: props.theme.palette.text.subPara,
  // marginLeft: "1.2em",
}));

export const LightGreenButton = styled(Button)((props) => ({
  backgroundColor: props.theme.palette.background.buttonMain,
  // marginLeft: "1.2em",
}));
