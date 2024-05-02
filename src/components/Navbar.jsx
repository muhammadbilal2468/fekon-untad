import React, { useEffect, useState } from "react";
import { untadImg } from "../assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(false);
  // const [classBgNav, setClassBgNav] = useState("");
  // const [classTittleNav, setClassTittleNav] = useState("");
  // const [classMenuNav, setClassMenuNav] = useState("");

  const currentUrl = window.location.href;
  console.log(currentUrl);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const currentUrl = window.location.href; // Ambil URL saat ini di dalam useEffect

    if (currentUrl === "https://fekon-untad.vercel.app/") {
      setIsHome(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const checkIsHome = () => {
  //   if (isScrolled && isHome) {
  //     setClassBgNav("bg-white");
  //   } else if (isScrolled && isHome) {
  //     setClassBgNav("bg-white");
  //   }
  // };

  console.log("isHome :", isHome);
  // console.log("classBgNav :", classBgNav);
  // console.log("classTittleNav :", classTittleNav);
  // console.log("classMenuNav :", classMenuNav);

  return (
    <nav
      className={`sticky top-0 z-50 text-white ${
        !isScrolled && isHome ? "bg-none" : "bg-white shadow-md "
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={untadImg} className="h-8" alt="Flowbite Logo" />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              isScrolled && isHome && "text-black"
            } ${!isHome && "text-black"}`}
          >
            Akuntansi Sektor Publik
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul
            className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
          >
            <li>
              <a
                href="/"
                className={`block py-2 px-3 rounded md:p-0 ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Beranda
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbarAbout"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Tentang
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarAbout"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="profil"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profil Akuntansi Sektor Publik
                    </a>
                  </li>
                  <li>
                    <a
                      href="visimisi"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Struktur Kepemimpinan
                    </a>
                  </li>
                  <li>
                    <a
                      href="dosen"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dosen
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Staff
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLinkAcademic"
                data-dropdown-toggle="dropdownNavbarAcademic"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Akademik
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarAcademic"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonAcademic"
                >
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      RPS dan Buku Ajar
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Panduan Akademik
                    </a>
                  </li>
                  <li>
                    <a
                      href="kurikulum-akademik"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Kurikulum Akademik
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Jadwal Kuliah
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLinkServices"
                data-dropdown-toggle="dropdownNavbarServices"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Layanan
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarServices"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonServices"
                >
                  <li>
                    <a
                      href="layanan-mahasiswa"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LAYANAN MAHASISWA
                    </a>
                  </li>
                  <li>
                    <a
                      href="layanan-akademik"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LAYANAN AKADEMIK
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLinkStudentAffairs"
                data-dropdown-toggle="dropdownNavbarStudentAffairs"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Kemahasiswaan
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarStudentAffairs"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonStudentAffairs"
                >
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Himpunan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      SOP Administrasi Fakultas
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Beasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Kegiatan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Unit Kegiatan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Prestasi
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLinkFacilities"
                data-dropdown-toggle="dropdownNavbarFacilities"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Fasilitas
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarFacilities"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonFacilities"
                >
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Laboratorium
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Perpustakaan
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Kelas
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-10 ${
//         isScrolled ? "bg-white shadow-md" : "bg-none"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between py-4">
//           <h1 className="text-xl font-semibold">Your Navbar</h1>
//           {/* Add any navbar content here */}
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
