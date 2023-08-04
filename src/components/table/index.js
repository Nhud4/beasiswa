import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiDocumentText } from 'react-icons/hi2';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Server from '@/utils/server';

export default function HomeTable(){
  const server = new Server();
  const [data, setData] = useState([]);
  const [page, setPage] = useState([]);

  const numberPage = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
  ];

  useEffect(() => {
    setPage(numberPage);
  }, []);

  const list = async() =>{
    const result = await server.listData();
    setData(result);
  };

  useEffect(() =>{
    list();
  }, []);

  return(
    <div className="w-full pr-2">
      <h1 className="text-xl font-semibold mb-4">Data Mahasiswa</h1>
      <div className="bg-white w-full px-2 py-1 rounded-md shadow-1">
        <div className="py-2 flex justify-between items-center">
          <div className="flex items-center border border-nero-20 p-2 rounded-md">
            <input placeholder="Search" className="outline-none"/>
            <BiSearch className="text-xl text-nero-20"/>
          </div>
        </div>
        <div className="py-2">
          <div className="table border-collapse table-auto w-full">
            <div className="table-header-group">
              <div className="table-row text-sm font-semibold text-white bg-primary-10 mb-6">
                <div className="table-cell p-4 text-left rounded-l">No</div>
                <div className="table-cell p-4 text-left">Nama Mahasiswa</div>
                <div className="table-cell p-4 text-left">Desa</div>
                <div className="table-cell p-4 text-left">Universitas</div>
                <div className="table-cell p-4 text-left">Status Pengajuan</div>
                <div className="table-cell p-4 text-left">Tanggal Pengajuan</div>
                <div className="table-cell p-4 text-right rounded-r">Detail</div>
              </div>
            </div>
            <div className="table-row-group">
              {data?.map((item, key) => (
                <div className="table-row text-sm" key={key}>
                  <p className="table-cell px-4 py-1">{key + 1}</p>
                  <p className="table-cell px-4 py-1 capitalize">{item.nama_mahasiswa}</p>
                  <p className="table-cell px-4 py-1 capitalize">{item.desa}</p>
                  <p className="table-cell px-4 py-1 capitalize">{item.universitas}</p>
                  <div className="table-cell px-4 py-1">
                    <div className="bg-natural-30 w-fit px-2 py-1 rounded">
                      <div className="text-natural-20 font-medium">{item.beasiswa.totalProbabilitas.kesimpulan}</div>
                    </div>
                  </div>
                  <p className="table-cell px-4 py-1 capitalize">17 Jan 2023</p>
                  <div className="table-cell px-4 py-1 text-right">
                    <Link className="flex justify-center items-center" href={`/detail/${item._id}`}>
                      <HiDocumentText className="!text-xl"/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm py-1 px-4">
          <div className="flex items-center space-x-2">
            <div>1 - 10</div>
            <div>of</div>
            <div>500</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white shadow rounded-md cursor-pointer">
              <IoChevronBackOutline />
            </div>
            <div>
              {page[0]?.number} / {page.length}
            </div>
            <div className="p-2 bg-white shadow rounded-md cursor-pointer">
              <IoChevronBackOutline className="rotate-180"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
