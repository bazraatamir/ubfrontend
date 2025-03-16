import React from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import HomePage from "../../pages/HomePage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
