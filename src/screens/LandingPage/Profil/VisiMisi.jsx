import React, { useEffect, useState } from "react";
import { misiImg, visiImg } from "../../../assets";
import visiMisi from "../../../data/visimisi.json";
import HeaderPage from "../../../components/HeaderPage";

const VisiMisi = () => {
  const [misi, setMisi] = useState([]);

  useEffect(() => {
    setMisi(visiMisi.misi);
  }, []);

  console.log("misi", misi);

  return (
    <>
      <HeaderPage title="Visi Misi" />
      <div className="flex flex-col xl:p-0 p-4">
        <img
          src={visiImg}
          alt=""
          className="absolute xl:block hidden left-0 mt-32"
        />
        <img
          src={misiImg}
          alt=""
          className="absolute xl:block hidden right-0 mt-32"
        />
        <div className="max-w-screen-xl mx-auto p-4 z-10">
          <div className="relative mt-10">
            <div className="flex flex-col justify-center items-center gap-5 mb-10">
              <h2 className="xl:text-4xl text-xl font-bold">VISI</h2>
              <div className="xl:p-6 p-3 rounded-md xl:w-1/2 text-center bg-primary text-white shadow-2xl">
                <p className="leading-9 xl:text-lg text-sm">
                  " {visiMisi.visi}"
                </p>
              </div>
            </div>
            <div className="mb-10">
              <h2 className="xl:text-4xl text-xl font-bold text-center mb-5">
                MISI
              </h2>
              <div className="grid xl:grid-cols-3 grid-cols-2 xl:gap-10 gap-3">
                {misi.map((misi, index) => {
                  return (
                    <div className="flex flex-col border-primary rounded-lg shadow-lg shadow-primary bg-white xl:p-6 p-4 gap-5">
                      <p className="text-primary xl:text-5xl text-2xl font-bold xl:text-start text-center">
                        {1 + index}
                      </p>
                      <p className="xl:text-lg text-sm text-gray-500 xl:text-justify text-center">
                        {misi}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
