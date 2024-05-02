import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/LandingPage";
import VisiMisi from "./screens/LandingPage/Profil/VisiMisi";
import Profil from "./screens/LandingPage/Profil/profile";
import LayananMahasiswa from "./screens/LandingPage/Layanan/LayananMahasiswa";
import LayananAkademik from "./screens/LandingPage/Layanan/LayananAkademik";
import TimAplikasi from "./screens/LandingPage/TimAplikasi";
import Dosen from "./screens/LandingPage/Profil/Personil/Dosen";
import KurikulumAkademik from "./screens/LandingPage/Layanan/KurikulumAkademik";
import Beranda from "./screens/LandingPage/Beranda/Beranda";

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
          <Route path="/kurikulum-akademik" element={<KurikulumAkademik />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
