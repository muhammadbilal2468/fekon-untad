import React from "react";
import berita from "../../../data/berita.json";
import { useNavigate } from "react-router";
import HeaderPage from "../../../components/HeaderPage";

const Berita = () => {
  const navigate = useNavigate();

  const navigateToDetailBerita = (id) => {
    navigate(`/detail-berita/${id}`);
  };
  return (
    <>
      <HeaderPage title="Berita" />
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <div className="grid xl:grid-cols-4 grid-cols-2 gri gap-4">
          {berita.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 cursor-pointer"
              onClick={() => navigateToDetailBerita(item.id)}
            >
              <img
                src="https://source.unsplash.com/featured/?campus"
                alt=""
                className="w-full h-36 rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <div className="flex xl:text-xs text-[9px] gap-1 justify-between">
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
      </div>
    </>
  );
};

export default Berita;
