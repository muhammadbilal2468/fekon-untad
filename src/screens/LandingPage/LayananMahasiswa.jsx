import React from "react";
import { perpustakaanImg, silaImg, sistaImg } from "../../assets";

const LayananMahasiswa = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center my-10">
        LAYANAN MAHASISWA
      </h2>
      <div className="flex gap-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg h-46 w-full" src={perpustakaanImg} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Perpustakaan Digital
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Apliakasi mahasiswa untuk mengelolah data
            </p>
            <a
              href="https://estd.perpus.untad.ac.id/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary"
            >
              Kunjungi Situs
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg h-46 w-full" src={silaImg} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SILA
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sistem Informasi Layanan Akademik
            </p>
            <a
              href="https://sila.fekon.untad.ac.id:8443/Akademik/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary"
            >
              Kunjungi Situs
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg h-46 w-full" src={sistaImg} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SISTA
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Sistem Informasi Tugas Akhir
            </p>
            <a
              href="https://fekon.untad.ac.id/sista/auth"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary"
            >
              Kunjungi Situs
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananMahasiswa;
