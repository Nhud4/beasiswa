import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiDocumentText } from 'react-icons/hi2';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import Server from '@/utils/server';

export default function HomeTable(){
  const server = new Server();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [search, setSearch] = useState('');

  const list = async(params) =>{
    const result = await server.listData(params);
    setData(result.data);
    setMeta(result.meta);
  };

  useEffect(() =>{
    list({
      page: page,
      size: 10,
      order: '',
      search: search
    });
  }, [page, search]);

  const handleBack = (number) => {
    if(number > 1){
      setPage(number - 1);
    }
  };

  return(
    <div className="w-full pr-2">
      <div className="bg-white w-full px-4 py-2 rounded-md shadow-1">
        <div className="py-2 flex justify-between items-center">
          <div className="flex items-center border border-nero-20 p-2 rounded-md">
            <input
              placeholder="Search"
              className="outline-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
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
                  <p className="table-cell px-4 py-2">{key + 1}</p>
                  <p className="table-cell px-4 py-2 capitalize">{item.nama_mahasiswa}</p>
                  <p className="table-cell px-4 py-2 capitalize">{item.desa}</p>
                  <p className="table-cell px-4 py-2 capitalize">{item.universitas}</p>
                  <div className="table-cell px-4 py-2">
                    <div className="bg-natural-30 w-fit px-2 py-1 rounded">
                      <div className="text-sm text-natural-20 font-medium">
                        {item.beasiswa.totalProbabilitas.kesimpulan === 'lulus' ? 'Lulus':'Tidak Lulus'}
                      </div>
                    </div>
                  </div>
                  <p className="table-cell px-4 py-2 capitalize">17 Jan 2023</p>
                  <div className="table-cell px-4 py-2 text-right">
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
            <div>{meta?.totalData}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white shadow rounded-md cursor-pointer" onClick={() => handleBack(page)}>
              <IoChevronBackOutline />
            </div>
            <div>
              {page} / {meta?.totalPage}
            </div>
            <div className="p-2 bg-white shadow rounded-md cursor-pointer" onClick={() => setPage(page + 1)}>
              <IoChevronBackOutline className="rotate-180"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
