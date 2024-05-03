import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  banner2Img,
  sertifikatImg,
  untad2Img,
  untadImg,
} from "../../../assets";

const Profil = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <div className="relative mb-10 rounded-2xl border-primary">
          <div className="relative w-full rounded-t-3xl h-60">
            <img
              src={banner2Img}
              alt=""
              className="w-full h-60 rounded-t-3xl border-b-4 border-primary"
            />
            <img
              src={untadImg}
              alt=""
              className="absolute left-16 -bottom-16 w-36 h-36 rounded-full border-primary border-4 p-2 bg-white"
            />
          </div>
          <div className="ml-64 mt-10">
            <h2 className="text-3xl font-bold">Fakultas Ekonomi</h2>
            <h3 className="text-2xl text-gray-600">
              Prodi Akuntansi Sektor Publik
            </h3>
            <p>
              Jl. Soekarno Hatta No.KM. 9, Tondo, Kec. Mantikulore, Kota Palu,
              Sulawesi Tengah 94148
            </p>
            <div className="flex gap-10 mt-10">
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
        <hr className="border-4 border-primary mb-20" />
        {/* -------------------------------------- */}
        <h2 className="text-4xl font-bold text-center mb-10">SEJARAH</h2>
        <div className="flex gap-10">
          <img src={untad2Img} alt="" className="w-1/2 h-72" />
          <div className="">
            <p className="text-gray-500 text-justify mb-2">
              Pada 11 Maret tahun 2022, langkah besar dalam transformasi
              pendidikan tinggi vokasi di Universitas Tadulako terwujud melalui
              Keputusan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi
              Republik Indonesia Nomor 81/D/OT/2022. Keputusan tersebut
              memberikan izin pembukaan Program Studi Akuntansi Sektor Publik
              Program Sarjana Terapan (PS ASP Sarjana Terapan) di Universitas
              Tadulako (UNTAD), Kota Palu. Pemberian izin tersebut merupakan
              transformasi dari Program Studi Akuntansi Program Diploma Tiga (PS
              Akuntansi D3) menjadi PS ASP Sarjana Terapan pada Jurusan
              Akuntansi Fakultas Ekonomi dan Bisnis Universitas Tadulako (FEB
              UNTAD).{" "}
            </p>
            <p className="text-gray-500 text-justify mb-2">
              Rektor Universitas Tadulako menindaklanjuti keputusan menteri
              tersebut dengan mengeluarkan Keputusan Rektor UNTAD Nomor
              1961/UN28/OT/2022 yang memberikan izin penyelenggaraan PS ASP
              Sarjana Terapan di FEB UNTAD. Berikutnya, Rektor UNTAD untuk
              pertama kalinya menunjuk Koordinator PS ASP Sarjana Terapan
              berdasarkan Keputusan Rektor UNTAD Nomor 7813/UN28/KP/2022.
              Perubahan ini bertujuan untuk menyesuaikan diri dengan kebutuhan
              zaman dan meningkatkan relevansi pendidikan tinggi dengan dunia
              industri, khususnya dalam bidang akuntansi sektor publik.
            </p>
          </div>
        </div>
        <p className="text-gray-500 text-justify mb-2">
          Menteri dalam keputusannya menginstruksikan pengelola PS Akuntansi D3
          agar tidak melakukan penerimaan mahasiswa sejak Keputusan Menteri
          tersebut ditetapkan. Hal ini menandakan komitmen untuk fokus pada
          pengembangan PS ASP Sarjana Terapan sebagai pilihan utama dalam
          menyediakan pendidikan berkualitas dalam bidang akuntansi sektor
          publik. Akan tetapi, seluruh ketentuan mengenai izin penyelenggaraan
          PS Akuntansi D3 tetap berlaku hingga penetapan kelulusan mahasiswa.
          Dengan demikian, proses pendidikan tetap berjalan dalam perubahan ini
          yang memberikan jaminan status kepada mahasiswa telah terdaftar dalam
          program tersebut. Akhirnya pada tahun 2023, D3 Akuntansi secara resmi
          ditutup berdasarkan Keputusan Menteri Pendidikan, Kebudayaan, Riset,
          dan Teknologi Nomor 99/D/OT/2023 tentang Pencabutan Izin Pembukaan
          Program Studi pada Universitas Tadulako di Kota Palu.
        </p>
        <p className="text-gray-500 text-justify mb-2">
          Seiring dengan keputusan transformasi tersebut, mahasiswa angkatan
          tahun 2020/2021 dan 2021/2022 yang sebelumnya terdaftar di PS
          Akuntansi Da dialihkan ke PS ASP Sarjana Terapan yang telah
          diresmikan. Peralihan tersebut berdasarkan Keputusan Rektor UNTAD
          Nomor 2142/UN28/PD/2022. Langkah ini merupakan bagian dari strategi
          untuk memberikan peluang pendidikan yang lebih luas dan relevan bagi
          mahasiswa dalam menghadapi tuntutan pasar kerja yang semakin kompleks.
          Sementara, mahasiswa yang telah memulai studi di PS Akuntansi D3
          sebelum tahun 2019/2020 diberikan waktu paling lama 1 (satu) tahun
          untuk menyelesaikan studi mereka. Hal ini dilakukan agar tidak
          mengganggu proses pendidikan yang sudah berjalan dan memberikan
          kesempatan pada mahasiswa SP Akuntansi D3 untuk menyelesaikan program
          studi sesuai dengan kurikulum yang berlaku. Kurikulum PS ASP Sarjana
          Terapan yang baru telah disiapkan untuk penerimaan mahasiswa baru
          tahun ajaran 2022/2023 dan mahasiswa peralihan dari PS Akuntansi D3,
          berdasarkan Putusan Rektor No. 8189/UN28/KR/2021. Dengan demikian, PS
          ASP Sarjana Terapan telah beroperasi hingga saat ini sebagai bagian
          dari PS di Jurusan Akuntansi FEB UNTAD.
        </p>
        {/* --------------------------------------- */}
        <h2 className="text-4xl font-bold text-center mb-10">AKREDITAS</h2>
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center mb-10"
        >
          <img src={sertifikatImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Profil;
