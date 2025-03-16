import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./features/public/routes";

const App = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default App;
