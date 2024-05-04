import React from "react";
import { untad2Img } from "../../../assets";
import HeaderPage from "../../../components/HeaderPage";

const Sejarah = () => {
  return (
    <>
      <HeaderPage title="Sejarah" />
      <div className="max-w-screen-xl mx-auto p-4 z-10">
        <h2 className="xl:text-4xl text-xl font-bold text-center mb-5">
          SEJARAH
        </h2>
        <div className="flex xl:flex-row flex-col gap-10">
          <img
            src={untad2Img}
            alt=""
            className="xl:w-1/2 w-full xl:h-fit h-60"
          />
          <div className="">
            <p className="text-gray-500 text-justify mb-2 xl:text-base text-xs">
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
            <p className="text-gray-500 text-justify mb-2 xl:text-base text-xs">
              Rektor Universitas Tadulako menindaklanjuti keputusan menteri
              tersebut dengan mengeluarkan Keputusan Rektor UNTAD Nomor
              1961/UN28/OT/2022 yang memberikan izin penyelenggaraan PS ASP
              Sarjana Terapan di FEB UNTAD. Berikutnya, Rektor UNTAD untuk
              pertama kalinya menunjuk Koordinator PS ASP Sarjana Terapan
              berdasarkan Keputusan Rektor UNTAD Nomor 7813/UN28/KP/2022.
            </p>
          </div>
        </div>
        <p className="text-gray-500 text-justify mb-2 xl:text-base text-xs">
          Perubahan ini bertujuan untuk menyesuaikan diri dengan kebutuhan zaman
          dan meningkatkan relevansi pendidikan tinggi dengan dunia industri,
          khususnya dalam bidang akuntansi sektor publik.Menteri dalam
          keputusannya menginstruksikan pengelola PS Akuntansi D3 agar tidak
          melakukan penerimaan mahasiswa sejak Keputusan Menteri tersebut
          ditetapkan. Hal ini menandakan komitmen untuk fokus pada pengembangan
          PS ASP Sarjana Terapan sebagai pilihan utama dalam menyediakan
          pendidikan berkualitas dalam bidang akuntansi sektor publik. Akan
          tetapi, seluruh ketentuan mengenai izin penyelenggaraan PS Akuntansi
          D3 tetap berlaku hingga penetapan kelulusan mahasiswa. Dengan
          demikian, proses pendidikan tetap berjalan dalam perubahan ini yang
          memberikan jaminan status kepada mahasiswa telah terdaftar dalam
          program tersebut. Akhirnya pada tahun 2023, D3 Akuntansi secara resmi
          ditutup berdasarkan Keputusan Menteri Pendidikan, Kebudayaan, Riset,
          dan Teknologi Nomor 99/D/OT/2023 tentang Pencabutan Izin Pembukaan
          Program Studi pada Universitas Tadulako di Kota Palu.
        </p>
        <p className="text-gray-500 text-justify mb-2 xl:text-base text-xs">
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
      </div>
    </>
  );
};

export default Sejarah;
