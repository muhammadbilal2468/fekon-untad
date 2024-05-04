import React from "react";
import { useParams } from "react-router";
import berita from "../../../data/berita.json";
import HeaderPage from "../../../components/HeaderPage";

const DetailBerita = () => {
  const { id } = useParams();
  const detailBerita = berita.find((item) => item.id === parseInt(id));

  return (
    <>
      <HeaderPage title="Detail Berita" />
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <div className="grid grid-cols-6 gap-10">
          <div className="flex flex-col col-span-4 gap-5">
            <h2 className="text-2xl font-bold text-justify">
              {detailBerita.judul}
            </h2>
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-full h-96 rounded-xl"
            />
            <p className="text-justify">
              <span className="font-bold">{detailBerita.nama} - </span>{" "}
              {detailBerita.desk}
            </p>
          </div>
          <div className=" flex flex-col col-span-2">
            <h3 className="text-xl font-bold mb-5 mt-12">Berita Lainnya</h3>
            <div className="flex gap-3 items-center border-b-2 pb-3 mb-3">
              <img
                src="https://source.unsplash.com/random"
                alt=""
                className="w-1/2 h-20 rounded-xl"
              />
              <p className="font-bold xl:text-sm text-[10px]">
                The 5th International Public Sector Conference (IPSC) 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBerita;
