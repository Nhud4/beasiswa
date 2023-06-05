import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GrNext } from 'react-icons/gr';
import Server from '@/utils/server';
import FormModal from '../modal';

export default function HomeTable(){
  const server = new Server();
  const [data, setData] = useState([]);

  const list = async() =>{
    const result = await server.listData();
    setData(result);
  };

  useEffect(() =>{
    list();
  }, []);

  return(
    <div className="bg-white w-full rounded p-2 rounded-lg shadow-1">
      <div className="py-2 flex justify-between items-center">
        <h1 className="text-xl font-semibold pl-1">Data Mahasiswa</h1>
        <div className="flex">
          <div className="mr-4">Search</div>
          <FormModal />
        </div>
      </div>
      <div className="py-2">
        <div className="table border-collapse table-auto w-full">
          <div className="table-header-group">
            <div className="table-row text-sm font-semibold text-white bg-primary-10">
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
                <p className="table-cell px-4 py-1 capitalize">{item.nama}</p>
                <p className="table-cell px-4 py-1 capitalize">{item.desa}</p>
                <p className="table-cell px-4 py-1 capitalize">{item.universitas}</p>
                <div className="table-cell px-4 py-1">
                  <div className="bg-natural-30 w-fit px-2 py-1 rounded">
                    <div className="ftext-natural-20 font-medium">Lulus</div>
                  </div>
                </div>
                <p className="table-cell px-4 py-1 capitalize">17 Jan 2023</p>
                <div className="table-cell px-4 py-1 text-right">
                  <Link className="flex justify-center items-center" href="#">
                    <div className="flex justify-center items-center bg-white w-6 h-6 rounded-full shadow-2">
                      <GrNext />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end py-1 px-4">
        <nav className="flex items-center space-x-2">
          <a className="hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="w-8 h-8 bg-primary-10 text-white inline-flex justify-center items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
          <a className="w-10 h-10 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
          <a className="w-10 h-10 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
          <a className="hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
            <span className="sr-only">Next</span>
            <span aria-hidden="true">»</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
