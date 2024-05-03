import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/LandingPage";
import Beranda from "./screens/LandingPage/Beranda/Beranda";
import LayananAkademik from "./screens/LandingPage/Layanan/LayananAkademik";
import LayananMahasiswa from "./screens/LandingPage/Layanan/LayananMahasiswa";
import Kurikulum from "./screens/LandingPage/Profil/Kurikulum";
import Dosen from "./screens/LandingPage/Profil/Personil/Dosen";
import VisiMisi from "./screens/LandingPage/Profil/VisiMisi";
import Profil from "./screens/LandingPage/Profil/profile";
import TimAplikasi from "./screens/LandingPage/TimAplikasi";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/visimisi" element={<VisiMisi />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/layanan-mahasiswa" element={<LayananMahasiswa />} />
          <Route path="/layanan-akademik" element={<LayananAkademik />} />
          <Route path="/tim-aplikasi" element={<TimAplikasi />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/kurikulum" element={<Kurikulum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
