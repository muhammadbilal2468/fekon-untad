import React from "react";
import { misiImg, visiImg } from "../../../assets";

const VisiMisi = () => {
  return (
    <>
      <div className="flex flex-col">
        <img src={visiImg} alt="" className="absolute left-0 mt-32" />
        <img src={misiImg} alt="" className="absolute right-0 mt-32" />
        <div className="max-w-screen-xl mx-auto p-4 z-10">
          <div className="relative mt-10">
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h2 className="text-4xl font-bold">VISI</h2>
              <div className="p-6 rounded-md w-1/2 text-center bg-primary text-white shadow-2xl">
                <p className="leading-9">
                  " MENJADI PROGRAM STUDI YANG UNGGULDALAM PENERAPAN ILMU
                  AKUNTANSISEKTOR PUBLIK DI ASIA TENGGARA TAHUN2030 BERBASIS NEW
                  PUBLIC PENGELOLAAN ."
                </p>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-center mb-5">MISI</h2>
              <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">1</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Mengembangkan kurikulum secara inovatif yang sesuai
                    kebutuhan institusi akuntansisektor publik.
                  </p>
                </div>
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">2</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Menyediakan sumber daya yang memadai untuk mendukung
                    pencapaian Tri Darma Perguruan Tinggi.
                  </p>
                </div>
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">3</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Mendorong kegiatan penelitian yang berkualitas tinggi dalam
                    bidang akuntansi sektor publik dengan fokus pada New Public
                    Management (NPM).
                  </p>
                </div>
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">4</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Membangun kerja sama dengan lembaga-lembaga nasional dan
                    internasional.
                  </p>
                </div>
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">5</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Menyediakan program pengembangan kompetensi yang relevan.
                  </p>
                </div>
                <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white p-6 gap-5">
                  <p className="text-primary text-5xl font-bold">6</p>
                  <p className="text-lg text-gray-500 text-justify">
                    Mendorong mahasiswa untuk berpartisipasi dalam kegiatan
                    ekstrakurikuler yang dapat meningkatkan soft skills mereka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
