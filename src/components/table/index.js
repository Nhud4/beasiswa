import Link from 'next/link';
import React from 'react';
import { GrNext } from 'react-icons/gr';

export default function HomeTable(){
  return(
    <div className="bg-white w-full rounded p-2 rounded-lg shadow">
      <div className="py-2 flex justify-between items-center">
        <h2>Data Mahasiswa</h2>
      </div>
      <div className="py-2">
        <div className="table border-collapse table-auto w-full">
          <div className="table-header-group">
            <div className="table-row text-xs font-semibold text-white bg-primary-10">
              <div className="table-cell px-6 py-3 text-left rounded-l">No</div>
              <div className="table-cell px-6 py-3 text-left">Nama Mahasiswa</div>
              <div className="table-cell px-6 py-3 text-left">Alamat</div>
              <div className="table-cell px-6 py-3 text-left">Universitas</div>
              <div className="table-cell px-6 py-3 text-left">Status Pengajuan</div>
              <div className="table-cell px-6 py-3 text-right rounded-r" />
            </div>
          </div>
          <div className="table-row-group">
            <div className="table-row text-sm">
              <div className="table-cell px-6 py-4">01</div>
              <div className="table-cell px-6 py-4">John Brown</div>
              <div className="table-cell px-6 py-4">Lengkong, Balen</div>
              <div className="table-cell px-6 py-4">UNUGIRI</div>
              <div className="table-cell px-6 py-4">Lulus</div>
              <div className="table-cell px-6 py-4 text-right">
                <Link className="" href="#">
                  <div className="flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-2">
                    <GrNext />
                  </div>
                </Link>
              </div>
            </div>
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
