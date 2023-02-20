import Navbar from "./Components/Navbar/Navbar";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme/theme";
import { Outlet } from "react-router";
import { Box } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
