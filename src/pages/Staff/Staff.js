import { Box, Button, Grid, Typography } from "@material-ui/core";
import { createTheme, useTheme, styled } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { ReactComponent as FrameIcon } from "../../Images/Frame.svg";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Pagination, ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Scale } from "@mui/icons-material";
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

const Staff = () => {
  const theme = useTheme();
  const [filterColumn, setFilterColumn] = useState("");
  const [sortModel, setSortModel] = useState([{ field: "name", sort: "asc" }]);

  const [selectedOption, setSelectedOption] = useState("Doctor");

  const handleOptionChange = (event, newOption) => {
    if (newOption !== null) {
      setSelectedOption(newOption);
    }
  };
  const handleFilterClick = (event, column) => {
    // Show filter popover for the clicked column
    setFilterColumn(column);
  };
  const StyledToggleButton = styled(ToggleButton)(({ theme, selected }) => ({
    backgroundColor: selected ? "#AFDECC" : "inherit",
    color: "#165643",
    "&:hover": {
      backgroundColor: selected ? "#AFDECC;" : theme.palette.action.hover,
    },
  }));

  const styleToggle = {
    background: "#AFDECC",
    borderRadius: "50px",
    // width: "1.5em",
    border: "none",
  };
  const styleText = {
    backgroundColor: "#FFFFFF",
    borderRadius: "50px",
  };
  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  });
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{
          marginTop: "1em",
        }}>
        <Grid item sx={12} md={10} xl={10}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <SideBox
                theme={theme}
                style={{
                  padding: "0 2em",
                }}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item xs={8}>
                    <SecondaryTypography theme={theme} variant="h3">
                      Doctors
                    </SecondaryTypography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                    <WhiteTypography theme={theme} variant="h1">
                      20
                    </WhiteTypography>
                  </Grid>
                </Grid>
              </SideBox>
            </Grid>
            <Grid item xs={6}>
              <LightGreenBox
                theme={theme}
                style={{
                  padding: "0 2em",
                }}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center">
                  <Grid item xs={8}>
                    <MainTypography theme={theme} variant="h3">
                      Nusres
                    </MainTypography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}>
                    <MainTypography theme={theme} variant="h1">
                      100
                    </MainTypography>
                  </Grid>
                </Grid>
              </LightGreenBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={12} md={2} xl={2}>
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
      <Box
        style={{
          marginTop: "2em",
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <StyledBox theme={theme}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <StyledBox
                    theme={theme}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1em 0",
                    }}
                    spacing={2}>
                    <CustomTextField
                      style={styleText}
                      id=""
                      sx={{ width: "12em", height: "3em" }}
                      label=""
                      placeholder="Name"
                    />
                    <CustomTextField
                      style={styleText}
                      id=""
                      placeholder="Spcialization"
                      label=""
                      sx={{ width: "12em", height: "3em" }}
                    />
                    <CustomTextField
                      style={styleText}
                      sx={{ width: "7em", height: "3em" }}
                      id=""
                      placeholder="500"
                      label=""
                      hint
                    />
                    <ToggleButtonGroup
                      value="Doctor"
                      selected={selectedOption === "Doctor"}>
                      <StyledToggleButton
                        value="Nurse"
                        // sx={{ width: "14em", height: "50px" }}
                        selected={selectedOption === "Nurse"}>
                        Doctor
                      </StyledToggleButton>
                      <StyledToggleButton
                        value="Nurse"
                        sx={{
                          bgcolor:
                            selectedOption === "Nurse" ? "pink" : "inherit",
                          borderRadius:
                            selectedOption === "Nurse" ? "50px" : "inherit",
                        }}>
                        Nurse
                      </StyledToggleButton>
                    </ToggleButtonGroup>

                    <CustomTextField
                      style={styleText}
                      id=""
                      sx={{ width: "14em", height: "3em" }}
                      label=""
                      placeholder="Phone"
                    />
                    <CustomTextField
                      style={styleText}
                      id=""
                      sx={{ width: "14em", height: "3em" }}
                      label=""
                      placeholder="Timing"
                    />
                    <GreenButton theme={theme} variant="h3">
                      +
                    </GreenButton>
                  </StyledBox>
                </Grid>
                <Grid item xs={12}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: "2px",
                      backgroundColor: "#2D7C65",
                      margin: "1em",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
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
                </Grid>
              </Grid>
            </StyledBox>
          </Grid>

          <Grid item xs={12} md={2} xl={4}>
            <Grid container>
              <Grid item xs={12}>
                <StyledBox
                  theme={theme}
                  style={{
                    padding: "1em 0",
                  }}>
                  <BlackTypgraphy theme={theme} variant="subtitle2">
                    Medical Staff
                  </BlackTypgraphy>
                  <WhiteBox theme={theme}>
                    <Grid container spacing={1} style={{ padding: 1 }}>
                      <Grid item xs={3}>
                        <FrameIcon sx={{ color: "#165643 !important" }} />
                      </Grid>
                      <Grid item xs={5}>
                        <BlackTypgraphy theme={theme} variant="h6">
                          Dr. Omair
                        </BlackTypgraphy>
                        <GreyTypography theme={theme} variant="subtitle1">
                          Child Specialist
                        </GreyTypography>
                      </Grid>
                      <Grid item xs={3}>
                        <LightGreenButton theme={theme} borderRadius=" 50px">
                          View
                        </LightGreenButton>
                      </Grid>
                    </Grid>
                  </WhiteBox>
                  <WhiteBox theme={theme}>
                    <Grid container spacing={1} style={{ padding: 1 }}>
                      <Grid item xs={3}>
                        <FrameIcon sx={{ color: "#165643 !important" }} />
                      </Grid>
                      <Grid item xs={5}>
                        <BlackTypgraphy theme={theme} variant="h6">
                          Dr. Omair
                        </BlackTypgraphy>
                        <GreyTypography theme={theme} variant="subtitle1">
                          Child Specialist
                        </GreyTypography>
                      </Grid>
                      <Grid item xs={3}>
                        <LightGreenButton theme={theme} borderRadius=" 50px">
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
                        <BlackTypgraphy theme={theme} variant="h6">
                          Dr. Omair
                        </BlackTypgraphy>
                        <GreyTypography theme={theme} variant="subtitle1">
                          Child Specialist
                        </GreyTypography>
                      </Grid>
                      <Grid item xs={3}>
                        <LightGreenButton theme={theme} borderRadius=" 50px">
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
                        <BlackTypgraphy theme={theme} variant="h6">
                          Dr. Omair
                        </BlackTypgraphy>
                        <GreyTypography theme={theme} variant="subtitle1">
                          Child Specialist
                        </GreyTypography>
                      </Grid>
                      <Grid item xs={3}>
                        <LightGreenButton theme={theme} borderRadius=" 50px">
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
                    theme={theme}
                    variant="subtitle2"
                    style={{
                      margin: ".5em 0em",
                    }}>
                    Settings
                  </GreenTypography>
                  <GreenTypography
                    theme={theme}
                    variant="subtitle2"
                    style={{
                      margin: ".5em 0em",
                    }}>
                    Logout
                  </GreenTypography>
                  <GreenTypography
                    theme={theme}
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

export default Staff;

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
