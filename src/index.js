import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Opd from "./pages/Opd/Opd";
import LabCollabs from "./pages/Lab Collabs/LabCollabs";
import Indoor from "./pages/Indoor/Indoor";
import Staff from "./pages/Staff/Staff";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./Theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
root.render(
  <Router>
    <Routes>
      <Route path="login" element={<Root />} />
      <Route path="/" element={<App />} exact>
        <Route path="" element={<Dashboard />} />
        <Route path="opd" element={<Opd />} />
        <Route path="labCollabs" element={<LabCollabs />} />
        <Route path="indoor" element={<Indoor />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
