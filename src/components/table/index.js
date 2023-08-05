import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiDocumentText } from 'react-icons/hi2';
import { IoChevronBackOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { format } from 'date-fns';
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

  const fotmateDate = (date) => {
    if(date){
      const dataFormat = format(new Date(date), 'dd-MM-yyyy');
      return dataFormat;
    }else{
      return '-';
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
        {data.length > 0 ? (
          <div className="py-2">
            <div className="table border-collapse table-auto w-full">
              <div className="table-header-group">
                <div className="table-row text-xs font-semibold text-white bg-primary-10 mb-6">
                  <div className="table-cell px-2 py-4 text-center rounded-l">No</div>
                  <div className="table-cell px-2 py-4 text-left">Nama Mahasiswa</div>
                  <div className="table-cell px-2 py-4 text-left">Desa</div>
                  <div className="table-cell px-2 py-4 text-left">Universitas</div>
                  <div className="table-cell px-2 py-4 text-left">Status Pengajuan</div>
                  <div className="table-cell px-2 py-4 text-left">Tanggal Pengajuan</div>
                  <div className="table-cell px-2 py-4 text-center rounded-r">Detail</div>
                </div>
              </div>
              <div className="table-row-group">
                {data?.map((item, key) => (
                  <div className="table-row text-xs" key={key}>
                    <p className="table-cell text-center p-2">{key + 1}</p>
                    <p className="table-cell p-2 uppercase">{item.nama_mahasiswa}</p>
                    <p className="table-cell p-2 uppercase">{item.desa}</p>
                    <p className="table-cell p-2 uppercase">{item.universitas}</p>
                    <div className="table-cell p-2">
                      <div
                        className={item.beasiswa.totalProbabilitas.kesimpulan === 'lulus' ?
                          'bg-natural-30 w-fit px-2 py-1 rounded':'bg-danger-30 w-fit px-2 py-1 rounded'}>
                        <div
                          className={item.beasiswa.totalProbabilitas.kesimpulan === 'lulus' ?
                            'text-sm text-natural-20 font-medium':'text-sm text-danger-20 font-medium'}>
                          {item.beasiswa.totalProbabilitas.kesimpulan === 'lulus' ? 'Lulus':'Tidak Lulus'}
                        </div>
                      </div>
                    </div>
                    <p className="table-cell p-2 uppercase">{fotmateDate(item.createdAt)}</p>
                    <div className="table-cell p-2 text-right">
                      <Link className="flex justify-center items-center" href={`/detail/${item._id}`}>
                        <HiDocumentText className="!text-xl"/>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ): (
          <div className="flex justify-center items-center h-[15rem] rounded-md">
            <div>Tidak Ada Data</div>
          </div>
        )}
        <div className="flex justify-between items-center text-sm py-1 px-4">
          <div className="flex items-center space-x-2">
            <div>1 - {meta?.totalData}</div>
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
