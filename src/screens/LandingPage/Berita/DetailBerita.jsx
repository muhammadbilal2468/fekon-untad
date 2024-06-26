import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import berita from "../../../data/berita.json";
import HeaderPage from "../../../components/HeaderPage";

const DetailBerita = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);

  useEffect(() => {
    setId(params.id);
  }, [params.id]);

  const detailBerita = berita.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/detail-berita/${id}`);
  };

  return (
    <>
      <HeaderPage title="Detail Berita" />
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <h2 className="xl:text-2xl text-lg font-bold text-justify xl:w-4/6 w-full mb-5">
          {detailBerita.judul}
        </h2>
        <div className="flex xl:flex-row flex-col gap-10">
          <div className="xl:w-4/6 w-full flex flex-col gap-5">
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
          <div className="xl:w-2/6 w-full flex flex-col">
            <h3 className="text-xl font-bold mb-5">Berita Lainnya</h3>
            <div className="xl:flex grid grid-cols-2 xl:flex-col xl:gap-0 gap-3 overflow-x-auto">
              {berita
                .slice(0, 5)
                .sort(() => Math.random() - 0.5)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border-b-2 pb-3 mb-3 cursor-pointer"
                    onClick={() => navigateToDetail(item.id)}
                  >
                    <img
                      src="https://source.unsplash.com/random"
                      alt=""
                      className="xl:w-1/2 w-1/3 xl:h-20 h-12 rounded-xl"
                    />
                    <p className="font-bold xl:text-sm text-[10px]">
                      {item.judul.slice(0, 50)}...
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBerita;
