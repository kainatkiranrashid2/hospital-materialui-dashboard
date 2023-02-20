import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import loginBg from "../../Images/loginBg.jpg";
import { Box, Button, Typography } from "@material-ui/core";

import { createTheme, useTheme } from "@material-ui/core/styles";
const Container = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    height: "100vh",
  },
}));
const LoginContainer = styled(Grid)(({ theme }) => ({
  minHeight: "calc(100vh - 64px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
}));

const Item1 = styled(Grid)(({ theme }) => ({
  background: "#165643",
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
      <Item1 item xs={12} md={6}>
        <LoginContainer>
          <LoginBox container alignItems="left" direction="column" spacing={2}>
            <Grid item>
              <SecondaryTypography variant="h4">Login</SecondaryTypography>
            </Grid>
            <LoginForm container direction="column" spacing={2}>
              <Grid item>
                <TextField id="email" label="Email" variant="outlined" />
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I accept the terms and conditions"
                />
              </Grid>
              <Grid item></Grid>
            </LoginForm>
          </LoginBox>
        </LoginContainer>
      </Item1>
      <Item2 item xs={false} md={6}></Item2>
    </Container>
  );
};

export default Login;
