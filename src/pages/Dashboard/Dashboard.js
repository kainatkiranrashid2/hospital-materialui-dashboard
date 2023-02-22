import { Box, Button, Grid, Typography } from "@material-ui/core";
import { createTheme, useTheme, styled } from "@material-ui/core/styles";
import { TextField, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
// import theme from "../../Theme/theme";
import { ReactComponent as FrameIcon } from "../../Images/Frame.svg";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../Opd/Opd.css";
import {
  StyledBox,
  WhiteBox,
  WelcomeTypography,
  SecondaryTypography,
  GreenButton,
  WhiteTypography,
  SideBox,
  GreenTypography,
  MainTypography,
  LightGreenBox,
  BlackTypgraphy,
  GreyTypography,
  LightGreenButton,
} from "../../Styles/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Pagination } from "@material-ui/lab";

const Dashboard = () => {
  const [filterColumn, setFilterColumn] = useState("");
  const [sortModel, setSortModel] = useState([{ field: "name", sort: "asc" }]);
  const [searchText, setSearchText] = useState("");
  const theme = useTheme();

  const handleFilterClick = (event, column) => {
    // Show filter popover for the clicked column
    setFilterColumn(column);
  };
  const handleSearch = () => {
    // handle search functionality here
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  function SortedDescendingIcon() {
    return <ExpandMoreIcon className="icon" />;
  }

  function SortedAscendingIcon() {
    return <ExpandLessIcon className="icon" />;
  }

  const rows = [
    {
      id: 1,
      parentName: "Snow",
      firstName: "Jon",
      age: 35,
      doctor: "Omair",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 2,
      parentName: "Lannister",
      firstName: "Cersei",
      age: 42,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 3,
      parentName: "Lannister",
      firstName: "Jaime",
      age: 45,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 4,
      parentName: "Stark",
      firstName: "Arya",
      age: 16,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 5,
      parentName: "Targaryen",
      firstName: "Daenerys",
      age: "23",
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 6,
      parentName: "Melisandre",
      firstName: null,
      age: 150,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 7,
      parentName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 8,
      parentName: "Frances",
      firstName: "Rossini",
      age: 36,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
    {
      id: 9,
      parentName: "Roxie",
      firstName: "Harvey",
      age: 65,
      doctor: "ayesha",
      MrNumber: "23 - 3555 - 544",
    },
  ];
  const handleSortModelChange = (model) => {
    setSortModel(model);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90, sortable: true },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      sortable: true,
      editable: true,
      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
    },
    {
      field: "parentName",
      headerName: "Parent name",
      width: 150,
      sortable: true,
      editable: true,
      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
    },
    {
      field: "age",
      headerName: "Age/Sex",
      type: "number",
      width: 110,
      sortable: true,
      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
      editable: true,
    },
    {
      field: "doctor",
      headerName: "Doctor",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      sortable: true,
      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "MrNumber",
      headerName: "Mr#",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,

      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      width: 160,
      field: "Entries 10",

      headerClassName: "custom-header",
      // cellClassName: "custom-cell",
      renderCell: () => {
        return (
          <Box backgroundColor="white">
            <LightGreenButton borderRadius=" 50px" variant="h6">
              View
            </LightGreenButton>
            <Button
              style={{
                backgroundColor: "#F4FAFB",
                // transform: Scale(2),
              }}
              borderRadius=" 50px"
              startIcon={
                <DeleteOutlineIcon
                  style={{
                    height: "1em",
                    color: "#AFDECC",
                  }}
                />
              }
            />
          </Box>
        );
      },
    },
  ];
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10} xl={8}>
          <StyledBox theme={theme} paddingX={1} paddingY={1}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: 2 }}>
              <Grid item xs={12} lg={5} padding={1}>
                <WelcomeTypography theme={theme} variant="h4">
                  Welcome Back Doctor,
                </WelcomeTypography>
                <Typography color="#B6B6B6" variant="subtitle2">
                  Saturday 27/ 09/ 2023
                </Typography>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item xs={4} sx={{ margin: 2 }}>
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
                  <Grid item xs={8}>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      alignItems="center">
                      <Grid item xs={1}>
                        <Typography color="#165643" variant="body2">
                          To
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
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
              </Grid>
            </Grid>
          </StyledBox>
        </Grid>
        <Grid item xs={12} md={2} xl={4}>
          <SideBox theme={theme}>
            <Box padding={2} textAlign="center">
              <SecondaryTypography theme={theme} variant="button">
                Unveil new features
              </SecondaryTypography>
              <WhiteTypography theme={theme} variant="h5">
                Upgrade Now
              </WhiteTypography>
            </Box>
          </SideBox>
        </Grid>
      </Grid>
      <Box marginTop={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={10} xl={8}>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item xs={12} md={5}>
                    <SideBox
                      theme={theme}
                      justifyContent="center"
                      alignItems="center"
                      padding={2}>
                      <Grid container spacing={2}>
                        <Grid Item xs={8}>
                          <Box
                            sx={{
                              width: "100% !important",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <WhiteTypography
                              theme={theme}
                              variant="h4"
                              sx={{ marginBottom: 0 }}>
                              New Patients
                            </WhiteTypography>
                            <SecondaryTypography
                              theme={theme}
                              sx={{ marginTop: 0 }}
                              variant="body1">
                              in OPD/ Indoor
                            </SecondaryTypography>
                          </Box>
                        </Grid>
                        <Grid Item xs={4}>
                          <WhiteTypography theme={theme} variant="h1">
                            200*
                          </WhiteTypography>
                        </Grid>
                      </Grid>
                      <Divider
                        variant="middle"
                        sx={{
                          height: "2px",
                          backgroundColor: "#2D7C65",
                          margin: "1em",
                        }}
                      />
                      <Grid
                        container
                        spacing={2}
                        style={{ paddingBottom: ".5em" }}>
                        <Grid Item xs={5}>
                          <Box
                            sx={{
                              width: "100% !important",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <GreenTypography theme={theme} variant="body2">
                              Detail Stats
                            </GreenTypography>
                          </Box>
                        </Grid>
                        <Grid Item xs={6}>
                          <Grid
                            container
                            spacing={1}
                            style={{ justifyContent: "flex-end" }}>
                            <Grid item>
                              <GreenButton theme={theme}>
                                <SecondaryTypography
                                  theme={theme}
                                  variant="body2">
                                  OPD | 120
                                </SecondaryTypography>
                              </GreenButton>
                            </Grid>
                            <Grid item>
                              <GreenButton theme={theme}>
                                <SecondaryTypography
                                  theme={theme}
                                  variant="body2">
                                  Indoor | 080
                                </SecondaryTypography>
                              </GreenButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </SideBox>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <LightGreenBox
                      theme={theme}
                      justifyContent="center"
                      alignItems="center"
                      padding={2}>
                      <Grid container spacing={2}>
                        <Grid Item xs={7}>
                          <Box
                            sx={{
                              width: "100% !important",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <MainTypography
                              theme={theme}
                              variant="h4"
                              sx={{ marginBottom: 0 }}>
                              Earnings
                            </MainTypography>
                            <WhiteTypography
                              theme={theme}
                              sx={{ marginTop: 0 }}
                              variant="body1">
                              in OPD
                            </WhiteTypography>
                          </Box>
                        </Grid>
                        <Grid Item xs={5}>
                          <WhiteTypography theme={theme} variant="h1">
                            50K*
                          </WhiteTypography>
                        </Grid>
                      </Grid>
                      <Divider
                        variant="middle"
                        sx={{
                          height: "2px",
                          backgroundColor: "#2D7C65",
                          margin: "1em",
                        }}
                      />
                      <Grid
                        container
                        spacing={2}
                        style={{ paddingBottom: ".5em" }}>
                        <Grid Item xs={8}>
                          <Box
                            sx={{
                              width: "100% !important",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <GreenTypography theme={theme} variant="body2">
                              Detail Stats
                            </GreenTypography>
                          </Box>
                        </Grid>
                        <Grid Item xs={3}>
                          <Grid
                            container
                            spacing={1}
                            style={{ justifyContent: "flex-end" }}>
                            <Grid item>
                              <GreenButton theme={theme}>
                                <SecondaryTypography
                                  theme={theme}
                                  variant="body2">
                                  OPD | 120
                                </SecondaryTypography>
                              </GreenButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </LightGreenBox>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <StyledBox
                      theme={theme}
                      justifyContent="center"
                      alignItems="center"
                      padding={2}>
                      <Grid container spacing={2}>
                        <Grid Item xs={7}>
                          <Box
                            sx={{
                              width: "100% !important",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <MainTypography
                              theme={theme}
                              variant="h4"
                              sx={{ marginBottom: 0 }}>
                              Test
                            </MainTypography>
                          </Box>
                        </Grid>
                        <Grid Item xs={5}>
                          <MainTypography theme={theme} variant="h1">
                            12*
                          </MainTypography>
                        </Grid>
                      </Grid>
                      <Divider
                        variant="middle"
                        sx={{
                          height: "2px",
                          backgroundColor: "#2D7C65",
                          margin: "1em",
                        }}
                      />

                      <Grid
                        container
                        spacing={2}
                        style={{ justifyContent: "flex-end" }}>
                        <Grid
                          item
                          xs={10}
                          md={10}
                          style={{ textAlign: "right" }}>
                          <GreenButton theme={theme}>
                            <SecondaryTypography theme={theme} variant="body2">
                              OPD | 120
                            </SecondaryTypography>
                          </GreenButton>
                        </Grid>
                      </Grid>
                    </StyledBox>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12}>
                  <StyledBox
                    theme={theme}
                    style={{
                      padding: "1em",
                    }}>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <GreenTypography theme={theme} variant="h2">
                            Patients
                          </GreenTypography>
                        </Grid>
                        <Grid item xs={8} alignItems="flex-end">
                          <GreenTypography theme={theme} variant="h2">
                            <Box
                              style={{
                                display: "flex",
                                borderRadius: "50px",
                                justifyContent: "flex-end",
                              }}>
                              <TextField
                                variant="outlined"
                                placeholder="Search"
                                value={searchText}
                                style={{
                                  borderTopRightRadius: 0,
                                  borderBottomRightRadius: 0,
                                  borderRadius: "50px",
                                  paddingRight: "0",
                                }}
                                onChange={(event) =>
                                  setSearchText(event.target.value)
                                }
                                onKeyPress={handleKeyPress}
                                InputProps={{
                                  endAdornment: (
                                    <IconButton
                                      style={{
                                        backgroundColor:
                                          theme.palette.text.main,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 0,
                                        borderRadius: "50px",
                                      }}
                                      onClick={handleSearch}>
                                      <Search />
                                    </IconButton>
                                  ),
                                }}
                              />
                            </Box>
                          </GreenTypography>
                        </Grid>
                      </Grid>
                    </Box>
                    <WhiteBox theme={theme} sx={{ height: 400, width: "95%" }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        showSortIcon={true}
                        rowsPerPageOptions={[5]}
                        checkboxSelection={false}
                        autoPageSize={true}
                        sortModel={sortModel}
                        onSortModelChange={handleSortModelChange}
                        components={{
                          ColumnSortedDescendingIcon: SortedDescendingIcon,
                          ColumnSortedAscendingIcon: SortedAscendingIcon,
                          Pagination: CustomPagination,
                          Container: (props) => (
                            <div style={{ backgroundColor: "lightgray" }}>
                              <div {...props} />
                            </div>
                          ),
                        }}
                        style={{
                          border: "none",
                          "& .MuiDataGrid-row": {
                            backgoundColor: "pink",

                            outline: "0",
                          },
                          "& .MuiDataGrid-cell": {
                            borderRight: "none",
                          },
                          "& .MuiDataGrid-columnSeparator": {
                            display: "none",
                          },
                        }}
                        pagination
                        disableSelectionOnClick={true}
                        experimentalFeatures={{ newEditingApi: true }}
                      />
                    </WhiteBox>
                  </StyledBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2} xl={4}>
            <Grid container>
              <Grid item xs={12}>
                <StyledBox>
                  <BlackTypgraphy variant="subtitle2">
                    Medical Staff
                  </BlackTypgraphy>
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
                        <LightGreenButton borderRadius=" 50px">
                          View
                        </LightGreenButton>
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
                        <LightGreenButton borderRadius=" 50px">
                          View
                        </LightGreenButton>
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
                        <LightGreenButton borderRadius=" 50px">
                          View
                        </LightGreenButton>
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
                        <LightGreenButton borderRadius=" 50px">
                          View
                        </LightGreenButton>
                      </Grid>
                    </Grid>
                  </WhiteBox>
                </StyledBox>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}>
                  <GreenTypography
                    variant="subtitle2"
                    style={{
                      margin: ".5em 0em",
                    }}>
                    Settings
                  </GreenTypography>
                  <GreenTypography
                    variant="subtitle2"
                    style={{
                      margin: ".5em 0em",
                    }}>
                    Logout
                  </GreenTypography>
                  <GreenTypography
                    variant="subtitle2"
                    style={{
                      margin: ".5em 0em",
                    }}>
                    Customer Support
                  </GreenTypography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const CustomPagination = (props) => {
  const {
    pagination,
    rowCount,
    page,
    onPageChange,
    pageSize,
    onPageSizeChange,
  } = props;

  return (
    <Pagination
      count={Math.ceil(rowCount / pageSize)}
      page={page + 1}
      onChange={(event, value) => onPageChange(value - 1)}
      variant="outlined"
      shape="rounded"
      siblingCount={1}
      boundaryCount={1}
      color="primary"
      size="small"
      showFirstButton
      showLastButton
    />
  );
};

export default Dashboard;
