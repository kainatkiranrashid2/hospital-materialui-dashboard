import { Box, Button, Grid, Typography } from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
  useTheme,
  styled,
} from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
// import theme from "../../Theme/theme";
import { ReactComponent as FrameIcon } from "../../Images/Frame.svg";
import { DataGrid } from "@mui/x-data-grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import "./Opd.css";

const Indoor = () => {
  const theme = useTheme();
  const [filterColumn, setFilterColumn] = useState("");

  const StyledBox = styled(Box)({
    backgroundColor: theme.palette.background.boxMain,
    borderRadius: "25px",
  });
  const WhiteBox = styled(Box)({
    backgroundColor: theme.palette.text.whiteType,
    borderRadius: "25px",
    padding: ".5em",
    margin: ".25em",
    marginTop: "1em",
  });

  const WelcomeTypography = styled(Typography)({
    color: theme.palette.text.main,
  });
  const SecondaryTypography = styled(Typography)({
    color: theme.palette.text.secondary,
  });
  const GreenButton = styled(Button)({
    background: theme.palette.background.smallButton,
    borderRadius: "34px",
  });
  const WhiteTypography = styled(Typography)({
    color: theme.palette.text.whiteType,
  });
  const SideBox = styled(Box)({
    background: theme.palette.text.main,
    borderRadius: "25px",
  });
  const GreenTypography = styled(Typography)({
    color: theme.palette.text.smText,
    marginLeft: "1.2em",
  });
  const MainTypography = styled(Typography)({
    color: theme.palette.text.main,
    // marginLeft: "1.2em",
  });
  const LightGreenBox = styled(Box)({
    backgroundColor: theme.palette.background.buttonMain,
    borderRadius: "25px",
  });
  const BlackTypgraphy = styled(Typography)({
    color: theme.palette.text.para,
    // marginLeft: "1.2em",
  });
  const GreyTypography = styled(Typography)({
    color: theme.palette.text.subPara,
    // marginLeft: "1.2em",
  });

  const LightGreenButton = styled(Button)({
    backgroundColor: theme.palette.background.buttonMain,
    // marginLeft: "1.2em",
  });
  const handleFilterClick = (event, column) => {
    // Show filter popover for the clicked column
    setFilterColumn(column);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
      headerClassName: "custom-header",
      cellClassName: "custom-cell",
      renderHeader: (params) => (
        <div>
          {params.colDef.headerName}
          <ArrowDropDownIcon
            onClick={(event) => handleFilterClick(event, params.colDef.field)}
          />
        </div>
      ),
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
      headerClassName: "custom-header",
      cellClassName: "custom-cell",
      renderHeader: (params) => (
        <div>
          {params.colDef.headerName}
          <ArrowDropDownIcon
            onClick={(event) => handleFilterClick(event, params.colDef.field)}
          />
        </div>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      headerClassName: "custom-header",
      cellClassName: "custom-cell",
      editable: true,
      renderHeader: (params) => (
        <div>
          {params.colDef.headerName}
          <ArrowDropDownIcon
            onClick={(event) => handleFilterClick(event, params.colDef.field)}
          />
        </div>
      ),
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerClassName: "custom-header",
      cellClassName: "custom-cell",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      renderHeader: (params) => (
        <div>
          {params.colDef.headerName}
          <ArrowDropDownIcon
            onClick={(event) => handleFilterClick(event, params.colDef.field)}
          />
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10} xl={8}>
          <StyledBox paddingX={1} paddingY={1}>
            <Grid container spacing={2} alignItems="center" sx={{ margin: 2 }}>
              <Grid item xs={12} lg={4} padding={1}>
                <SideBox>
                  <Grid container>
                    <Grid Item xs={8}>
                      <Box
                        sx={{
                          width: "100% !important",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <WhiteTypography variant="h4" sx={{ marginBottom: 0 }}>
                          New Patients
                        </WhiteTypography>
                        <SecondaryTypography
                          sx={{ marginTop: 0 }}
                          variant="body1">
                          in OPD/ Indoor
                        </SecondaryTypography>
                      </Box>
                    </Grid>
                    <Grid Item xs={4}>
                      <WhiteTypography variant="h1">200*</WhiteTypography>
                    </Grid>
                  </Grid>
                </SideBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item xs={5} sx={{ margin: 2 }}>
                    <TextField
                      id="date"
                      type="date"
                      sx={{
                        background: "#FFFFFF",
                        borderRadius: "50px",
                        width: "100%",
                        margin: "auto",
                      }}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: "#B6B6B6",
                          fontFamily: "Gontserrat",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "20px",
                          padding: ".25em 1em",
                        },
                      }}
                      padding={2}
                      spacing={2}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography color="#165643" variant="body2">
                      To
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="date"
                      type="date"
                      sx={{
                        background: "#FFFFFF",
                        borderRadius: "50px",
                        width: "100%",
                        margin: "auto",
                      }}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: "#B6B6B6",
                          fontFamily: "Gontserrat",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "20px",
                          padding: ".25em 1em",
                        },
                      }}
                      padding={2}
                      spacing={2}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={2} xl={4}>
          <SideBox>
            <Box padding={2} textAlign="center">
              <SecondaryTypography variant="button">
                Unveil new features
              </SecondaryTypography>
              <WhiteTypography color="primary" variant="h5">
                Upgrade Now
              </WhiteTypography>
            </Box>
          </SideBox>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={10} md={10} x={8}>
          <StyledBox
            style={{
              padding: "1em",
            }}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <GreenTypography variant="h2">Patients</GreenTypography>
                </Grid>
                <Grid item xs={4}>
                  <GreenTypography variant="h2">Patients</GreenTypography>
                </Grid>
              </Grid>
            </Box>
            <WhiteBox sx={{ height: 400, width: "95%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
                disableColumnMenu={true}
                disableSelectionOnClick={true}
                disableColumnFilter={true}
                experimentalFeatures={{ newEditingApi: true }}
              />
            </WhiteBox>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={2} xl={4}>
          <StyledBox>
            <BlackTypgraphy variant="subtitle2">Medical Staff</BlackTypgraphy>
            <WhiteBox>
              <Grid container spacing={1} style={{ padding: 1 }}>
                <Grid item xs={3}>
                  <FrameIcon sx={{ color: "#165643 !important" }} />
                </Grid>
                <Grid item xs={5}>
                  <BlackTypgraphy variant="h6">Dr. Omair</BlackTypgraphy>
                  <GreyTypography variant="subtitle1">
                    Child Specialist
                  </GreyTypography>
                </Grid>
                <Grid item xs={3}>
                  <LightGreenButton borderRadius=" 50px">View</LightGreenButton>
                </Grid>
              </Grid>
            </WhiteBox>
            <WhiteBox>
              <Grid container spacing={1} style={{ padding: 1 }}>
                <Grid item xs={3}>
                  <FrameIcon sx={{ color: "#165643 !important" }} />
                </Grid>
                <Grid item xs={5}>
                  <BlackTypgraphy variant="h6">Dr. Omair</BlackTypgraphy>
                  <GreyTypography variant="subtitle1">
                    Child Specialist
                  </GreyTypography>
                </Grid>
                <Grid item xs={3}>
                  <LightGreenButton borderRadius=" 50px">View</LightGreenButton>
                </Grid>
              </Grid>
            </WhiteBox>
            <WhiteBox>
              <Grid container spacing={1} style={{ padding: 1 }}>
                <Grid item xs={3}>
                  <FrameIcon sx={{ color: "#165643 !important" }} />
                </Grid>
                <Grid item xs={5}>
                  <BlackTypgraphy variant="h6">Dr. Omair</BlackTypgraphy>
                  <GreyTypography variant="subtitle1">
                    Child Specialist
                  </GreyTypography>
                </Grid>
                <Grid item xs={3}>
                  <LightGreenButton borderRadius=" 50px">View</LightGreenButton>
                </Grid>
              </Grid>
            </WhiteBox>
            <WhiteBox>
              <Grid container spacing={1} style={{ padding: 1 }}>
                <Grid item xs={3}>
                  <FrameIcon sx={{ color: "#165643 !important" }} />
                </Grid>
                <Grid item xs={5}>
                  <BlackTypgraphy variant="h6">Dr. Omair</BlackTypgraphy>
                  <GreyTypography variant="subtitle1">
                    Child Specialist
                  </GreyTypography>
                </Grid>
                <Grid item xs={3}>
                  <LightGreenButton borderRadius=" 50px">View</LightGreenButton>
                </Grid>
              </Grid>
            </WhiteBox>
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Indoor;
