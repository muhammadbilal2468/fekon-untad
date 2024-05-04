import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { bannerVid } from "../../../assets";

// ------------------------- UGM --------------------------

const Beranda = () => {
  const [prestasiCount, setPrestasiCount] = useState(3);
  const [beritaCount, setBeritaCount] = useState(8);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
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

        {/* ------------------------------ */}
        <div className="mb-10">
          <h2 className="text-right text-primary text-2xl font-bold mb-2">
            Prestasi
          </h2>
          <div className="flex xl:flex-row flex-col gap-10 xl:h-96 h-fit">
            <div className="relative w-7/12 h-full">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="absolute w-full bg-cover rounded-xl h-full"
              />
            </div>
            <div className="flex flex-col justify-between xl:gap-2 gap-4 xl:w-5/12 w-full">
              {Array.from({ length: prestasiCount }).map((_, index) => (
                <div key={index} className="flex gap-2 h-1/3">
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="xl:w-36 w-64 bg-cover rounded-xl xl:h-full h-32"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex xl:text-xs text-[8px] gap-1 justify-between">
                      <p className="font-bold">Aura Dwi Kartika</p>
                      <p className="">2 Desember 2024</p>
                    </div>
                    <p className="font-bold xl:text-sm text-[10px]">
                      The 5th International Public Sector Conference (IPSC) 2023
                    </p>
                    <p className="text-gray-500 text-xs text-[9px] text-justify">
                      International Public Sector Conference (IPSC) Ke-5 2023
                      diselenggarakan oleh Fakultas Ekonomi dan Bisnis
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-primary text-2xl font-bold mt-10 mb-2">
            Berita Terbaru
          </h2>
          <div className="grid xl:grid-cols-4 grid-cols-2 gri gap-4">
            {Array.from({ length: beritaCount }).map((_, index) => (
              <div className="flex flex-col gap-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-full h-36 bg-cover rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex xl:text-xs text-[8px] gap-1 justify-between">
                    <p className="font-bold">Aura Dwi Kartika</p>
                    <p className="">2 Desember 2024</p>
                  </div>
                  <p className="font-bold xl:text-sm text-[10px]">
                    The 5th International Public Sector Conference (IPSC) 2023
                  </p>
                  <p className="text-gray-500 text-xs text-[9px] text-justify">
                    International Public Sector Conference (IPSC) Ke-5 2023
                    diselenggarakan oleh Fakultas Ekonomi dan Bisnis
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
