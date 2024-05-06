import React, { useEffect } from "react";
import prestasi from "../../../data/prestasi.json";
import { useNavigate } from "react-router";
import HeaderPage from "../../../components/HeaderPage";
import AOS from "aos";
import "aos/dist/aos.css";

const Prestasi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const navigate = useNavigate();

  const navigateToDetailBerita = (id) => {
    navigate(`/detail-prestasi/${id}`);
  };
  return (
    <>
      <HeaderPage title="Prestasi" />
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <div className="grid xl:grid-cols-4 grid-cols-2 gri gap-4">
          {prestasi.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 cursor-pointer"
              onClick={() => navigateToDetailBerita(item.id)}
              data-aos="fade-up"
            >
              <img
                src="https://source.unsplash.com/featured/?study"
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

export default Prestasi;
