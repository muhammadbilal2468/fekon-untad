import React, { useEffect } from "react";
import { bannerVid, pimpinanImg, sertifikatImg } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

// ------------------------- UGM --------------------------

const Beranda = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          style={{ filter: "brightness(0.6)" }}
        >
          <source src={bannerVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <h1 className="text-white text-4xl font-sans font-bold">
            Akuntansi Sektor Publik
          </h1>
          <p className="text-lg text-gray-200 text-center">
            Menyinari Masa Depan dengan Transparansi dan Integritas, Melangkah
            Maju dengan Keahlian dan Dedikasi di Bidang Akuntansi Sektor Publik
          </p>
          <a href="/profil">
            <button
              type="button"
              className="text-xl bg-primary px-6 py-2 text-white rounded-lg border-b border-white mt-4 w-fit cursor-pointer"
            >
              Lihat Profil
            </button>
          </a>
        </div>
        {/* ------------ ----------------- */}
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center mb-10 pt-[100vh]"
        >
          <img src={sertifikatImg} alt="" />
        </div>
        {/* ------------ ----------------- */}
        <div className="mb-20 w-4/5 mx-auto">
          <h2 className="text-center text-3xl mb-10">PIMPINAN</h2>
          <div className="flex gap-5">
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center basis-1/3 border rounded-md p-3 shadow-xl border-none pb-10"
            >
              <img src={pimpinanImg} alt="" className="w-full h-96 mb-3" />
              <h3 className="text-2xl font-bold">Anto S.kom.</h3>
              <p className="text-md text-gray-600 font-bold mb-10">
                Ketua Jurusan Akuntansi
              </p>
              <div className="flex items-center justify-center gap-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#00627A"
                    d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.61 87.61 0 0 1-3.33 24h-38.51a157.44 157.44 0 0 0 0-48h38.51a87.61 87.61 0 0 1 3.33 24m-114 40h52a115.11 115.11 0 0 1-26 45a115.27 115.27 0 0 1-26-45m-3.9-16a140.84 140.84 0 0 1 0-48h59.88a140.84 140.84 0 0 1 0 48ZM40 128a87.61 87.61 0 0 1 3.33-24h38.51a157.44 157.44 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114-40h-52a115.11 115.11 0 0 1 26-45a115.27 115.27 0 0 1 26 45m52.33 0h-35.62a135.28 135.28 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.28 135.28 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.28 135.28 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.28 135.28 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00627A"
                    d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#00627A"
                    fillRule="evenodd"
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
                  />
                </svg>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center basis-1/3 border rounded-md p-3 shadow-xl border-none pb-10"
            >
              <img src={pimpinanImg} alt="" className="w-full h-96 mb-3" />
              <h3 className="text-2xl font-bold">Anto S.kom.</h3>
              <p className="text-md text-gray-600 font-bold mb-10">
                Sekretaris Jurusan Akuntansi
              </p>
              <div className="flex items-center justify-center gap-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#00627A"
                    d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.61 87.61 0 0 1-3.33 24h-38.51a157.44 157.44 0 0 0 0-48h38.51a87.61 87.61 0 0 1 3.33 24m-114 40h52a115.11 115.11 0 0 1-26 45a115.27 115.27 0 0 1-26-45m-3.9-16a140.84 140.84 0 0 1 0-48h59.88a140.84 140.84 0 0 1 0 48ZM40 128a87.61 87.61 0 0 1 3.33-24h38.51a157.44 157.44 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114-40h-52a115.11 115.11 0 0 1 26-45a115.27 115.27 0 0 1 26 45m52.33 0h-35.62a135.28 135.28 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.28 135.28 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.28 135.28 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.28 135.28 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00627A"
                    d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#00627A"
                    fillRule="evenodd"
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
                  />
                </svg>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center basis-1/3 border rounded-md p-3 shadow-xl border-none pb-10"
            >
              <img src={pimpinanImg} alt="" className="w-full h-96 mb-3" />
              <h3 className="text-2xl font-bold">Anto S.kom.</h3>
              <p className="text-md text-gray-600 font-bold mb-10">
                Kepala Program Studi Akuntansi Sektor Publik
              </p>
              <div className="flex items-center justify-center gap-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#00627A"
                    d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.61 87.61 0 0 1-3.33 24h-38.51a157.44 157.44 0 0 0 0-48h38.51a87.61 87.61 0 0 1 3.33 24m-114 40h52a115.11 115.11 0 0 1-26 45a115.27 115.27 0 0 1-26-45m-3.9-16a140.84 140.84 0 0 1 0-48h59.88a140.84 140.84 0 0 1 0 48ZM40 128a87.61 87.61 0 0 1 3.33-24h38.51a157.44 157.44 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128m114-40h-52a115.11 115.11 0 0 1 26-45a115.27 115.27 0 0 1 26 45m52.33 0h-35.62a135.28 135.28 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.28 135.28 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.28 135.28 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.28 135.28 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00627A"
                    d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#00627A"
                    fillRule="evenodd"
                    d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-20 border-2 border-black" />
        {/* ------------ ----------------- */}
        <div className="flex gap-32 mb-20">
          <div className="">
            <iframe
              title="ekonomi"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(fakultas%20ekonmi%20UNTAD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
            <p className="text-lg">
              Jl. Soekarno Hatta No.KM. 9, Tondo, Kec. Mantikulore, Kota Palu,
              Sulawesi Tengah 94148
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-3xl font-bold mb-16 text-center">
              HUBUNGI KAMI
            </h2>
            <div className="flex gap-10">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                >
                  <g fill="#00627A">
                    <path d="m29.631 12.63l.33 1.47c.05.223.05.444.008.652A1 1 0 0 1 29 16h-2.255l-1.483-1.977v-.002A2.544 2.544 0 0 0 23.22 13H23v-1.69c0-.722-.588-1.31-1.31-1.31h-1.38c-.722 0-1.31.588-1.31 1.31v1.68h-6v-1.68c0-.722-.588-1.31-1.31-1.31h-1.38C9.588 10 9 10.588 9 11.31V13h-.22c-.808 0-1.563.381-2.05 1.03L5.254 16H3a1 1 0 0 1-.969-1.248a1.544 1.544 0 0 1 .008-.652l.32-1.47A7.199 7.199 0 0 1 9.379 7h13.242a7.18 7.18 0 0 1 7.01 5.63" />
                    <path d="m24.46 14.62l3.66 4.88A9.366 9.366 0 0 1 30 25.13v3.31c0 .86-.7 1.56-1.56 1.56H3.56C2.7 30 2 29.3 2 28.44v-3.31c0-2.03.66-4.01 1.88-5.63l3.65-4.87c.3-.4.76-.63 1.25-.63h.91c.17 0 .31-.14.31-.31v-2.38c0-.17.14-.31.31-.31h1.38c.17 0 .31.14.31.31v2.38c0 .17.14.31.31.31h7.38c.17 0 .31-.14.31-.31v-2.38c0-.17.14-.31.31-.31h1.38c.17 0 .31.14.31.31v2.38c0 .17.14.31.31.31h.91c.49 0 .95.23 1.24.62M13.698 19c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm3 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m-4.624 3c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m4.376 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm-7.376 3h1.376c.17 0 .311-.14.301-.312v-1.376a.313.313 0 0 0-.311-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312m4.376 0a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312zm1.624 0h1.376a.3.3 0 0 0 .302-.312v-1.376a.314.314 0 0 0-.312-.312h-1.376a.313.313 0 0 0-.312.312v1.376c0 .171.14.312.322.312" />
                  </g>
                </svg>
                <p className="ml-3 text-lg text-gray-600 font-bold mt-2">
                  +1 123 -456-7891
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00627A"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                  />
                </svg>
                <p className="ml-3 text-lg text-gray-600 font-bold mt-2">
                  akuntansi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beranda;
