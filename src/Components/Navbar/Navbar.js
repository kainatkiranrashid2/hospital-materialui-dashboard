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

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Navbar = (props) => {
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

  {
    /* .css-5ts1sv-MuiButtonBase-root-MuiTab-root.Mui-selected */
  }

  const tabStyle = {
    "&.Mui-selected": {
      color: theme.palette.text.main,
    },
    color: theme.palette.text.navbarSec,
    fontSize: theme.typography.overline.fontSize,
    fontFamily: "GontserratRegular",
    fontWeight: theme.typography.overline.fontWeight,
    lineHeight: theme.typography.overline.lineHeight,
    fontStyle: theme.typography.overline.fontStyle,
  };
  const logoStyle = {
    fontFamily: "GontserratBold !important",
    fontStyle: "normal !important",
    fontSize: {
      xs: "20px !important",
      sm: "22px !important",
      md: "26px !important",
      lg: "36px !important",
    },
    lineHeight: "104.4% !important",
    fontWeight: "700 !important",
    color: "#165643 !important",
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography sx={logoStyle}>Hospital Name</Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          component="nav"
          sx={{
            background: "#fff",
            boxShadow: "none",
            py: 2,
            px: { md: 0, xl: 3 },
          }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}>
              <MenuIcon sx={{ color: "#165643" }} />
            </IconButton>
            <Box sx={{ flex: 1 }}>
              <Toolbar
                disableGutters={true}
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}>
                <Typography sx={logoStyle}>Hospital Name</Typography>

                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Tabs
                    TabIndicatorProps={{
                      style: { transition: "none", display: "none" },
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example">
                    <Tab
                      sx={tabStyle}
                      value="/"
                      label="Dashboard"
                      component={Link}
                      to="/"
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
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
                    startIcon={
                      <FrameIcon sx={{ color: "#165643 !important" }} />
                    }>
                    Davis John
                  </Button>
                </Box>
              </Toolbar>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            <Tabs
              TabIndicatorProps={{
                style: { transition: "none", display: "none" },
              }}
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              orientation="vertical">
              <Tab
                sx={tabStyle}
                value="/"
                label="Dashboard"
                component={Link}
                to="/"
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
          </Drawer>
        </Box>
        <Box sx={{ height: "80px" }}></Box>
      </Box>
    </>
  );
};
Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
