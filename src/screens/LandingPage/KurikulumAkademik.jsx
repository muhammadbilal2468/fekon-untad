import React, { useEffect, useState } from "react";
import { untadImg } from "../../assets";
import kurikulumAkademik from "../../data/kurikulumakademik.json";

const KurikulumAkademik = () => {
  const [matkul, setMatkul] = useState([]);

  useEffect(() => {
    if (kurikulumAkademik.length > 0) {
      const mataKuliahSemesterPertama = kurikulumAkademik[0].mata_kuliah;
      setMatkul(mataKuliahSemesterPertama);
    }
  }, []);

  console.log("matkul", matkul);
  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-96">
      <h2 className="text-4xl font-bold text-center my-10">
        KURIKULUM AKADEMIK
      </h2>

      <div
        id="controls-carousel"
        class="relative flex flex-col w-2/3 mx-auto"
        data-carousel="static"
      >
        <div
          class="relative h-96 overflow-x-hidden rounded-lg"
          style={{
            overflowY: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {/* table */}
          {kurikulumAkademik.map((semester, index) => {
            const matkul = semester.mata_kuliah;
            return (
              <div
                class="hidden duration-700 ease-in-out"
                key={index}
                data-carousel-item
              >
                <h2 className="text-2xl text-center my-5 font-bold">
                  Semester {index + 1}
                </h2>
                <div class="relative overflow-x-auto sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-4">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Dosen Penanggung Jawab
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Kode
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Matakuliah
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Kelas
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {matkul.map((item, index) => {
                        return (
                          <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            key={index}
                          >
                            <th
                              scope="row"
                              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              <img
                                class="w-10 h-10 rounded-full"
                                src={untadImg}
                                alt="dosen"
                              />
                              <div class="ps-3">
                                <div class="text-base font-semibold">
                                  {item.dosen_pengampu.nama}
                                </div>
                                <div class="font-normal text-gray-500">
                                  {item.dosen_pengampu.nidn_nidk}
                                </div>
                              </div>
                            </th>
                            <td class="px-6 py-4">{item.kode_mk}</td>
                            <td class="px-6 py-4">
                              <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                {item.mata_kuliah}
                              </div>
                            </td>
                            <td class="px-6 py-4">
                              <p class="font-medium">{item.kelas.join(", ")}</p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          class="absolute top-0 -start-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 -end-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default KurikulumAkademik;
