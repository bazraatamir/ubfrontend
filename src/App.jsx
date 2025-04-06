import React from "react";
import appRoutes from "./routes/appRoutes";
import {BrowserRouter as Router, useRoutes} from "react-router";
import "./fonts.css";

const AppRoutes = () => {
  return useRoutes([...appRoutes]); // Load public & owner routes
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default App;
