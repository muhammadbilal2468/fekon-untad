import React, { useEffect, useState } from "react";
import { untadImg } from "../assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDoubleDropdown, setActiveDoubleDropdown] = useState(null);

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

    const currentUrl = window.location.href;

    if (currentUrl === "https://fekon-untad.vercel.app/") {
      setIsHome(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };
  const toggleDoubleDropdown = (dropdownId) => {
    setActiveDoubleDropdown(
      activeDoubleDropdown === dropdownId ? null : dropdownId
    );
  };

  return (
    <nav
      className={`sticky top-0 z-50 text-white ${
        !isScrolled && isHome ? "bg-none" : "bg-white shadow-md "
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:p-4 p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={untadImg} className="h-8" alt="Flowbite Logo" />
          <span
            className={`self-center xl:text-2xl text-lg font-semibold whitespace-nowrap ${
              isScrolled && isHome && "text-black"
            } ${!isHome && "text-black"}`}
          >
            Akuntansi Sektor Publik
          </span>
        </a>
        {/* Tombol hamburger */}
        <button
          onClick={toggleMenu} // Menggunakan onClick untuk mengubah status menu dropdown
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-expanded={isMenuOpen ? "true" : "false"} // Atur aria-expanded berdasarkan status menu dropdown
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
        {/* Konten menu dropdown */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
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
              <a
                href="/berita"
                className={`block py-2 px-3 rounded md:p-0 ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Berita
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("profil")}
              onMouseLeave={() => toggleDropdown("")}
            >
              <button
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Profil
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
                className={`absolute z-10 ${
                  activeDropdown === "profil" ? "block" : "hidden"
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/visimisi"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sejarah"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Organisasi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kurikulum"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Kurikulum
                    </a>
                  </li>
                  <li>
                    <a
                      href="/prestasi"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Prestasi
                    </a>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() => toggleDoubleDropdown("personil")}
                    onMouseLeave={() => toggleDoubleDropdown("")}
                  >
                    <button class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 ">
                      Personil
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
                      class={`absolute z-10 ${
                        activeDoubleDropdown === "personil" ? "block" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                    >
                      <ul class="py-2 text-sm text-gray-700">
                        <li>
                          <a
                            href=" "
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Pimpinan
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dosen"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Dosen
                          </a>
                        </li>
                        <li>
                          <a
                            href=" "
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Staff
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => toggleDropdown("kinerja")}
              onMouseLeave={() => toggleDropdown("")}
            >
              <button
                id="dropdownNavbarLinkKinerja"
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                kinerja SP ASP
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
                id="dropdownNavbarKinerja"
                className={`absolute z-10 ${
                  activeDropdown === "kinerja" ? "block" : "hidden"
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-56`}
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButtonKinerja"
                >
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Visi, Misi, Tujuan dan Strategi
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Tata Pamong, Tata Kelola dan Kerja Sama
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Kemahasiswaan
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Sumber Daya Manusia
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Keuangan, Sarana, dan Prasarana
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Pendidikan
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Penelitian
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Pengabdian Kepada Masyarakat
                    </a>
                  </li>
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Luaran dan Capaian Tridharma
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown("layanan")}
              onMouseLeave={() => toggleDropdown("")}
            >
              <button
                className={`flex items-center justify-between w-full py-2 px-3 text-gray-900 md:border-0 md:p-0 md:w-auto ${
                  !isScrolled && isHome ? "text-white" : "text-black"
                }`}
              >
                Layanan Akademik
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
                className={`absolute z-10 ${
                  activeDropdown === "layanan" ? "block" : "hidden"
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-56`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href=" " className="block px-4 py-2 hover:bg-gray-100">
                      Info Akademik
                    </a>
                  </li>
                  <li
                    className="relative"
                    onMouseEnter={() =>
                      toggleDoubleDropdown("layananmahasiswa")
                    }
                    onMouseLeave={() => toggleDoubleDropdown("")}
                  >
                    <button class="flex justify-between w-full px-4 py-2 hover:bg-gray-100 ">
                      Layanan Mahasiswa
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
                      class={`absolute z-10 ${
                        activeDoubleDropdown === "layananmahasiswa"
                          ? "block"
                          : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-56`}
                    >
                      <ul class="py-2 text-sm text-gray-700">
                        <li>
                          <a
                            href="https://estd.perpus.untad.ac.id/"
                            target="#blank"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Perpustakaan Digital
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://sila.fekon.untad.ac.id:8443/Akademik/"
                            target="#blank"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            sistem informasi layanan akademik (SILA)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://fekon.untad.ac.id/sista/auth"
                            target="#blank"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Sistem Informasi Tugas Akhir (SISTA)
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Navbar;
