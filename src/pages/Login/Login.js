import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import loginBg from "../../Images/loginBg.jpg";
import { Box, Button, CssBaseline, Typography } from "@material-ui/core";

import { createTheme, useTheme } from "@material-ui/core/styles";
const Container = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    height: "100vh",
  },
  padding: 0,
  margin: 0,
}));
const LoginContainer = styled(Grid)(({ theme }) => ({
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 0,
  height: "100%",
}));

const LoginBox = styled(Grid)(({ theme }) => ({
  width: "400px",
  padding: theme.spacing(3),
  borderRadius: "10px",
  textAlign: "center",
}));
const LoginForm = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  "& .MuiFormControl-root": {
    width: "100%",
    borderRadius: "50px",
    marginBottom: theme.spacing(2),
  },
  "& .MuiButton-root": {
    width: "100%",
    borderRadius: "50px",
    marginTop: theme.spacing(2),
  },
  "& .MuiFormControlLabel-label": {
    color: "#87CEEB",
    fontSize: "15px !important",
    width: "100%",
    textAlign: "left",
    fontFamily: "Gontserrat",
    fontWeight: 400,
    fontStyle: "normal",
  },
}));
const CustomButton = styled(Button)({
  background: "#87CEEB",
  color: "#003459",
  padding: "1em",
  width: "2em",
});

const Item1 = styled(Grid)(({ theme }) => ({
  background: "#003459",
  [theme.breakpoints.up("md")]: {
    gridColumn: 1,
    gridRow: 1,
  },
}));

const Item2 = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${loginBg})`,
  backgroundSize: "cover",
  [theme.breakpoints.up("md")]: {
    gridColumn: 2,
    gridRow: 1,
  },
}));

const Login = () => {
  const theme = useTheme();
  const SecondaryTypography = styled(Typography)({
    color: theme.palette.text.secondary,
    textAlign: "left",
  });
  return (
    <Container>
      <CssBaseline />

      <Item1 item xs={12} md={6}>
        <LoginContainer>
          <LoginBox container alignItems="left" direction="column" spacing={2}>
            <Typography
              variant="h2"
              style={{
                fontStyle: "normal",
                color: "#90e0ef",
                textAlign: "left",
                marginTop: 0,
              }}>
              Medicdex
            </Typography>
            <Grid item>
              <SecondaryTypography
                variant="h4"
                style={{
                  marginLeft: "0",
                }}>
                Login
              </SecondaryTypography>
            </Grid>
            <LoginForm container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  InputProps={{
                    style: {
                      borderRadius: "50px",
                    },
                  }}
                  placeholder="Enter Email / hospital ID"
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  InputProps={{
                    style: {
                      borderRadius: "50px",
                      background: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item alignItems="left">
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography variant="subtitle2">
                      I accept the terms and conditions
                    </Typography>
                  }
                />
              </Grid>
              <Grid item>
                <Grid container justifyContent="" alignItems="center">
                  <Grid item>
                    <Button
                      style={{
                        width: "10em",
                        background: "#87CEEB",
                        color: "#003459",
                        fontSize: "17px",
                        lineHeight: "21px",
                        marginTop: "0",
                        fontWeight: "400",
                      }}>
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        fontFamily: "Gontserrat",
                        fontStyle: "normal",
                        textAlign: "left",
                        fontSize: "17px",
                        lineHeight: "21px",
                        fontWeight: "400",
                        display: "flex",
                        alignItems: "center",
                      }}>
                      Forgot Password?
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </LoginForm>
          </LoginBox>
        </LoginContainer>
      </Item1>
      <Item2 item xs={false} md={6}></Item2>
    </Container>
  );
};

export default Login;
