import React, { useEffect, useState } from "react";
import { untadImg } from "../assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      class={`sticky top-0 z-50 text-white ${
        isScrolled ? "bg-white shadow-md" : "bg-none"
      }`}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={untadImg} class="h-8" alt="Flowbite Logo" />
          <span
            class={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Akuntansi Sektor Publik
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul
            class={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
          >
            <li>
              <a
                href="/"
                class={`block py-2 px-3 rounded md:p-0 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Beranda
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbarAbout"
                class={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Tentang
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarAbout"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="profil" class="block px-4 py-2 hover:bg-gray-100">
                      Profil Akuntansi Sektor Publik
                    </a>
                  </li>
                  <li>
                    <a
                      href="visimisi"
                      class="block px-4 py-2 hover:bg-gray-100"
                    >
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Struktur Kepemimpinan
                    </a>
                  </li>
                  <li>
                    <a href="dosen" class="block px-4 py-2 hover:bg-gray-100">
                      Dosen
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
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
                class={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Akademik
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarAcademic"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonAcademic"
                >
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      RPS dan Buku Ajar
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Panduan Akademik
                    </a>
                  </li>
                  <li>
                    <a
                      href="kurikulum-akademik"
                      class="block px-4 py-2 hover:bg-gray-100"
                    >
                      Kurikulum Akademik
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
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
                class={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Layanan
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarServices"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonServices"
                >
                  <li>
                    <a
                      href="layanan-mahasiswa"
                      class="block px-4 py-2 hover:bg-gray-100"
                    >
                      LAYANAN MAHASISWA
                    </a>
                  </li>
                  <li>
                    <a
                      href="layanan-akademik"
                      class="block px-4 py-2 hover:bg-gray-100"
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
                class={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Kemahasiswaan
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarStudentAffairs"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonStudentAffairs"
                >
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Himpunan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      SOP Administrasi Fakultas
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Beasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Kegiatan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Unit Kegiatan Mahasiswa
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
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
                class={`flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Fasilitas
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbarFacilities"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButtonFacilities"
                >
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Laboratorium
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
                      Perpustakaan
                    </a>
                  </li>
                  <li>
                    <a href=" " class="block px-4 py-2 hover:bg-gray-100">
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
