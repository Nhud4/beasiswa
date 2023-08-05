import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DetailChart } from '@/components/chart/detail_chart';
import { DetailGrafik } from '@/components/chart/detail_grafik';
import Server from '@/utils/server';
import HeaderPage from '@/components/card/titleBoard';

export default function Detail(){
  const server = new Server();
  const [data, setData] = useState([]);

  const router = useRouter();
  const { userId } = router.query;

  const detail = async(userId) =>{
    const result = await server.detailData(userId);
    setData(result);
  };

  useEffect(() =>{
    detail(userId);
  }, [userId]);

  const formtIdr = (params) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(params);
  };

  const handleDeleted = async() => {
    const result = await server.deleteData(userId);
    if(result.code === 201){
      alert('Data Berhasil DiHapus', router.replace('/data'));
    }
  };

  return (
    <div className="flex justify-center my-8">
      <div className="container">
        <div>
          <HeaderPage
            title={'Detail Mahasiswa'}
            breadcrumbs={[
              {
                title: 'Dashboard',
                url: '/'
              },
              {
                title: 'Data Mahasiswa',
                url: '/data'
              },
              {
                title: 'Detail Data Mahasiswa',
                url: `/detail/${userId}`
              }
            ]}
          />
          <div className="bg-white w-full p-4 rounded-md shadow-1">
            <div className="flex justify-between border-b border-nero-20">
              <div className="flex items-center space-x-4 py-4">
                <Image className="w-[80px] h-[80px]" src={require('@/assets/img/avatar1.png')} alt="user" />
                <div>
                  <h1 className="text-xl font-semibold">{data?.nama_mahasiswa}</h1>
                  <h2 className="text-[18px] font-semibold text-[#0093AD]">{data?.nim}</h2>
                  <div className="bg-primary-20 h-fit px-4 text-white rounded-md w-fit">
                    <p>{data?.jenis_kartu}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <button
                  className="text-danger-20 border border-danger-20 rounded-md mb-2 px-2 py-1 hover:bg-danger-20 hover:text-white"
                  onClick={handleDeleted}
                >
                  Hapus Data
                </button>
              </div>
            </div>
            <div className="border-b border-nero-20 py-4">
              <h1 className="text-xl text-[#444444] font-semibold">Informasi Data Diri</h1>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Nomor NIK</h1>
                  <p className="text-base font-light">{data?.nik}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Nomor KK</h1>
                  <p className="text-base font-light">{data?.no_kk}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Nama Orang Tua</h1>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-base font-light">Kepala Keluarga</p>
                    <p>: {data?.kepala_keluarga}</p>
                    <p className="text-base font-light">Ibu</p>
                    <p>: {data?.nama_ibu}</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Tempat Tanggal Lahir</h1>
                  <p className="text-base font-light">{data?.tempat_lahir}, {data?.tanggal_lahir}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Alamat</h1>
                  <p className="text-base font-light">{data?.alamat}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Desa</h1>
                  <p className="text-base font-light">{data?.desa}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Kecamatan</h1>
                  <p className="text-base font-light">{data?.kecamatan}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Kabupaten</h1>
                  <p className="text-base font-light">{data?.kabupaten}</p>
                </div>
              </div>
            </div>

            <div className="py-4 border-b border-nero-20">
              <h1 className="text-xl text-[#444444] font-semibold">Informasi Universitas</h1>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Universitas</h1>
                  <p className="text-base font-light">{data?.universitas}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Jenis Universitas</h1>
                  <p className="text-base font-light">{data?.jenis_univ}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Akreditasi Universitas</h1>
                  <p className="text-base font-light">{data?.akreditasi}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Fakultas</h1>
                  <p className="text-base font-light">{data?.fakultas}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Program Study</h1>
                  <p className="text-base font-light">{data?.prodi}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Semester</h1>
                  <p className="text-base font-light">{data?.semester}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Nilai Semester</h1>
                  <div className="grid grid-cols-2 gap-4">
                    {data?.nilai_khs?.map((item, key) => (
                      <div key={key}>
                        <p className="text-base font-light">Semester {key + 1}</p>
                        <p className="text-base font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">UKT</h1>
                  <p className="text-base font-light">{formtIdr(data?.ukt)}</p>
                </div>
              </div>
            </div>

            <div className="py-4 border-b border-nero-20">
              <h1 className="text-xl text-[#444444] font-semibold">Informasi Bank</h1>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Bank</h1>
                  <p className="text-base font-light">{data?.bank}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-primary-20">Nomor Rekening</h1>
                  <p className="text-base font-light">{data?.no_rekening}</p>
                </div>
              </div>
            </div>

            <div className="py-4">
              <h1 className="text-xl text-[#444444] font-semibold">Tingkat Kelulusan</h1>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="col-span-3">
                  <DetailGrafik />
                </div>
                <div>
                  <DetailChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
