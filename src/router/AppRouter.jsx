import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import Info from "../pages/Info";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path=":name/:city/:email/:zipcode" element={<Info />} />
      </Routes>
    </>
  );
};

export default AppRouter;
