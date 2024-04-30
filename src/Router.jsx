import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./layouts/LandingPage/LandingPage";
import Tentang from "./screens/LandingPage/Tentang";
import Beranda from "./screens/LandingPage/Beranda";
import VisiMisi from "./screens/LandingPage/VisiMisi";
import Profil from "./screens/LandingPage/profile";
import LayananMahasiswa from "./screens/LandingPage/LayananMahasiswa";
import LayananAkademik from "./screens/LandingPage/LayananAkademik";
import TimAplikasi from "./screens/LandingPage/TimAplikasi";
import Dosen from "./screens/LandingPage/Dosen";
import KurikulumAkademik from "./screens/LandingPage/KurikulumAkademik";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
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
