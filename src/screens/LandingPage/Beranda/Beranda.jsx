import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bannerVid } from "../../../assets";
import berita from "../../../data/berita.json";
import prestasi from "../../../data/prestasi.json";

// ------------------------- UGM --------------------------

const Beranda = () => {
  const [prestasiCount, setPrestasiCount] = useState(3);
  const [beritaCount, setBeritaCount] = useState(8);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* ------------ ----------------- */}
      <div className="pt-[100vh]"></div>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col items-center justify-center z-20 gap-4">
          <h1 className="text-white xl:text-4xl font-sans font-bold text-center text-2xl">
            Akuntansi Sektor Publik
          </h1>
          <p className="xl:text-lg text-sm text-gray-200 text-center">
            Menyinari Masa Depan dengan Transparansi dan Integritas, Melangkah
            Maju dengan Keahlian dan Dedikasi di Bidang Akuntansi Sektor Publik
          </p>
          <Link to={"/sejarah"}>
            <button className="bg-primary text-white py-2 px-6 rounded-xl">
              Lihat Profil
            </button>
          </Link>
        </div>

        {/* ------------------------------ */}
        <div className="mb-10">
          <h2 className="xl:text-end text-start text-primary text-2xl font-bold mb-2">
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
              {prestasi.slice(0, 3).map((item, index) => (
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
          <Link to={"/prestasi"}>
            <div className="flex xl:justify-end justify-center">
              <button className="bg-primary text-white py-2 px-6 rounded-xl mt-10">
                Lebih Banyak
              </button>
            </div>
          </Link>
          <h2 className="text-primary text-2xl font-bold mt-10 mb-2">
            Berita Terbaru
          </h2>
          <div className="grid xl:grid-cols-4 grid-cols-2 gri gap-4">
            {berita.slice(0, 8).map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-full h-36 bg-cover rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex xl:text-xs text-[8px] gap-1 justify-between">
                    <p className="font-bold">{item.nama}</p>
                    <p className="">{item.tanggal}</p>
                  </div>
                  <p className="font-bold xl:text-sm text-[10px]">
                    {item.judul.length > 100
                      ? `${item.judul.slice(0, 40)}...`
                      : item.judul}
                  </p>
                  <p className="text-gray-500 text-xs text-[9px] text-justify">
                    {item.desk.length > 100
                      ? `${item.desk.slice(0, 100)}...`
                      : item.desk}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link to={"/berita"}>
            <div className="flex justify-center">
              <button className="bg-primary text-white py-2 px-6 rounded-xl mt-10">
                Lebih Banyak
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Beranda;
