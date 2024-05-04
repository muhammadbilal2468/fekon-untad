import React, { useEffect, useState } from "react";
import { untadImg } from "../../../assets";
import kurikulum from "../../../data/kurikulum.json";
import HeaderPage from "../../../components/HeaderPage";

const Kurikulum = () => {
  const [matkul, setMatkul] = useState([]);

  useEffect(() => {
    if (kurikulum.length > 0) {
      const mataKuliahSemesterPertama = kurikulum[0].mata_kuliah;
      setMatkul(mataKuliahSemesterPertama);
    }
  }, []);

  console.log("matkul", matkul);
  console.log("kurikulum", kurikulum);
  return (
    <>
      <HeaderPage title="Kurikulum" />
      <div className="max-w-screen-xl mx-auto xl:p-0 p-4">
        <h2 className="xl:text-4xl text-xl font-bold text-center mb-10">
          KURIKULUM AKADEMIK
        </h2>
        {kurikulum.map((item, index) => {
          return (
            <div key={index} className="mb-20 overflow-x-scroll">
              <h3 className="text-xl mb-2 font-bold text-primary">
                Semester {item.semester}
              </h3>
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 border-4">
                <thead class="text-xs uppercase bg-primary text-white">
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
                        class="bg-white border-b  hover:bg-gray-50 "
                        key={index}
                      >
                        <th
                          scope="row"
                          class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                        >
                          <img
                            class="w-10 h-10 rounded-full"
                            src={untadImg}
                            alt="dosen"
                          />
                          <div class="ps-3">
                            <div class="font-semibold">
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
          );
        })}
      </div>
    </>
  );
};

export default Kurikulum;
