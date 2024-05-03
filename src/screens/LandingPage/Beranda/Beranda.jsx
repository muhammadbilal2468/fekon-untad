import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { bannerVid } from "../../../assets";

// ------------------------- UGM --------------------------

const Beranda = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          style={{ filter: "brightness(0.6)" }}
        >
          <source src={bannerVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col items-center justify-center z-20">
          <h1 className="text-white xl:text-4xl font-sans font-bold text-center text-2xl">
            Akuntansi Sektor Publik
          </h1>
          <p className="xl:text-lg text-sm text-gray-200 text-center">
            Menyinari Masa Depan dengan Transparansi dan Integritas, Melangkah
            Maju dengan Keahlian dan Dedikasi di Bidang Akuntansi Sektor Publik
          </p>
          <a href="/profil">
            <button
              type="button"
              className="xl:text-xl text-md bg-primary px-6 py-2 text-white rounded-lg border-b border-white mt-4 w-fit cursor-pointer"
            >
              Lihat Profil
            </button>
          </a>
        </div>

        {/* ------------ ----------------- */}
        <div className="pt-[100vh]"></div>
      </div>
    </>
  );
};

export default Beranda;
