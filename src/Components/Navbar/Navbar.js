import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useTheme, styled } from "@material-ui/core/styles";
// import theme from "../../Theme/theme";

import { ReactComponent as FrameIcon } from "../../Images/Frame.svg";

const Navbar = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState("/");
  const LogoTypography = styled(Typography)({
    color: theme.palette.text.main,
  });
  const WelcomeTypography = styled(Typography)({
    color: theme.palette.text.main,
    // variant: theme.typography.h2,
  });
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const tabStyle = {
    color: theme.palette.text.main,
    fontSize: theme.typography.overline.fontSize,
    fontFamily: theme.typography.overline.fontFamily,
    fontWeight: theme.typography.overline.fontWeight,
    lineHeight: theme.typography.overline.lineHeight,
    fontStyle: theme.typography.overline.fontStyle,
  };
  const logoStyle = {
    fontFamily: "Gontserrat !important",
    fontStyle: "normal !important",
    fontSize: "36px !important",
    lineHeight: "104.4% !important",
    fontWeight: "700 !important",
    color: "#165643 !important",
  };
  return (
    <>
      <AppBar position="static" elevation={0} spacing={theme.spacing(2)}>
        <Box>
          {/* <CssBaseline /> */}
          <Toolbar
            disableGutters={true}
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography sx={logoStyle}>Hospital Name</Typography>

            <Box sx={{}}>
              <Tabs
                TabIndicatorProps={{
                  style: { transition: "none", display: "none" },
                }}
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example">
                <Tab
                  sx={tabStyle}
                  value="/dashboard"
                  label="Dashboard"
                  component={Link}
                  to="dashboard"
                />

                <Tab
                  sx={tabStyle}
                  value="/opd"
                  label="OPD"
                  component={Link}
                  to="opd"
                />
                <Tab
                  sx={tabStyle}
                  value="/indoor"
                  label="Indoor"
                  component={Link}
                  to="indoor"
                />
                <Tab
                  sx={tabStyle}
                  value="/Staff"
                  label="Staff"
                  component={Link}
                  to="staff"
                />
                <Tab
                  sx={tabStyle}
                  value="/labCollabs"
                  label="Lab-Collabs"
                  component={Link}
                  to="labCollabs"
                />
              </Tabs>
            </Box>
            <Box>
              <Badge
                badgeContent={4}
                color="secondary"
                sx={{
                  mx: 4,
                }}>
                <NotificationsActiveIcon color="action" />
              </Badge>

              <Button
                variant="outlined"
                sx={{
                  background: "#E6F1F2",
                  color: "#165643",
                  borderRadius: "43px",
                  height: "3em",
                }}
                startIcon={<FrameIcon sx={{ color: "#165643 !important" }} />}>
                Davis John
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
