import React from "react";
import dosenData from "../../../../data/dosen.json";

const Dosen = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="xl:text-4xl text-lg font-bold text-center my-10">
        DAFTAR PENGAJAR PRODI AKUNTANSI SEKTOR PUBLIK
      </h2>
      <div className="overflow-x-auto relative">
        <table className="w-full xl:text-sm text-[10px] text-left text-gray-500">
          <thead className="text-gray-700 uppercase bg-gray-50">
            <tr className="bg-primary text-white">
              <th scope="col" className="py-3 px-2">
                No
              </th>
              <th scope="col" className="py-3 px-2">
                Nama Dosen
              </th>
              <th scope="col" className="py-3 px-2">
                Status
              </th>
              <th scope="col" className="py-3 px-2">
                NIDN/NIDK
              </th>
              <th scope="col" className="py-3 px-2">
                Jabatan Akademik
              </th>
              <th scope="col" className="py-3 px-2">
                Akademisi/Praktisi
              </th>
              <th scope="col" className="py-3 px-2">
                Pendidikan Pasca Sarjana
              </th>
            </tr>
          </thead>
          <tbody>
            {dosenData.map((dosen, index) => (
              <tr key={index} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap"
                >
                  {dosen.NO}
                </th>
                <td className="py-4 px-2">{dosen.NAMA_DOSEN}</td>
                <td className="py-4 px-2">{dosen.STATUS}</td>
                <td className="py-4 px-2">{dosen["NIDN/NIDK"]}</td>
                <td className="py-4 px-2">{dosen.JABATAN_AKADEMIK}</td>
                <td className="py-4 px-2">{dosen.AKADEMISI_PRAKTISI}</td>
                <td className="py-4 px-2">
                  <ul>
                    <li class="flex">
                      <svg
                        class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {dosen.PENDIDIKAN_PASCA_SARJANA[0]}
                    </li>
                    {dosen.PENDIDIKAN_PASCA_SARJANA[1] && (
                      <li class="flex">
                        <svg
                          class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        {dosen.PENDIDIKAN_PASCA_SARJANA[1]}
                      </li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dosen;
