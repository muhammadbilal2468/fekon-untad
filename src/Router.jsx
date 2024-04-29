import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/LandingPage";
import Tentang from "./screens/LandingPage/Tentang";
import Beranda from "./screens/LandingPage/Beranda";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
