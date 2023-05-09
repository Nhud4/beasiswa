import React, { useState } from 'react';

export default function FormInput(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nik, setNik] = useState('');
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [universitas, setUniv] = useState('');
  const [jenis, setJenis] = useState('');
  const [akreditasi, setAkreditasi] = useState('');
  const [semester, setSemester] = useState('');
  const [ips, setIps] = useState('');

  const handelAdd = async (e) =>{
    e.preventDefault();
    const data = [ name, age, nik, gender, desa, kecamatan, kabupaten, universitas, jenis, akreditasi, semester, ips];
    alert('Berhasil Menambahkan Data', data);
  };

  return(
    <>
      <form className="bg-white rounded-lg shadow-2" onSubmit={handelAdd}>
        <div className="p-8 space-y-2">
          <div className="space-y-2">
            <label className="text-lg font-medium">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
              placeholder="Masukkan Nama Lengkap Mahasiswa"/>
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Nomor Induk Kependudukan (NIK)</label>
            <input
              type="text"
              value={nik}
              onChange={(e)=> setNik(e.target.value)}
              className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
              placeholder="Masukkan NIK Mahasiswa"/>
          </div>
          <div className="flex">
            <div className="w-1/2 mr-4 space-y-2">
              <label className="text-lg font-medium">Umur</label>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                placeholder="Masukkan Umur Mahasiswa"/>
            </div>
            <div className="w-1/2 space-y-2">
              <label className="text-lg font-medium">Jenis Kelamin</label>
              <select className="rounded-lg w-full p-3 bg-white text-sm focus:outline-none border border-nero-20"
                onChange={(e) => setGender(e.target.value)}
              >
                <option selected disabled defaultValue={''}>Pilih Jenis Kelamin</option>
                <option value={'laki-laki'}>Laki-laki</option>
                <option value={'perempuan'}>Perempuan</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mr-4 space-y-2">
              <label className="text-lg font-medium">Desa</label>
              <input
                type="text"
                value={desa}
                onChange={(e) => setDesa(e.target.value)}
                className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                placeholder="Desa"/>
            </div>
            <div className="w-1/2 space-y-2">
              <label className="text-lg font-medium">Kecamatan</label>
              <input
                type="text"
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
                className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                placeholder="Kecamatan"/>
            </div>
          </div>
          <div className="space-y-2 w-1/2 pr-2">
            <label className="text-lg font-medium">Kabupaten</label>
            <input
              type="text"
              value={kabupaten}
              onChange={(e) => setKabupaten(e.target.value)}
              className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
              placeholder="Kabupaten"/>
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Asal Universitas</label>
            <input
              type="text"
              value={universitas}
              onChange={(e) => setUniv(e.target.value)}
              className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
              placeholder="Masukkan Universitas Mahasiswa"/>
          </div>
          <div className="flex">
            <div className="w-1/2 mr-4 space-y-2">
              <label className="text-lg font-medium">Jenis Universitas</label>
              <select className="rounded-lg w-full p-3 bg-white text-sm focus:outline-none border border-nero-20"
                onChange={(e) => setJenis(e.target.value)}
              >
                <option selected disabled defaultValue={''}>Pilih Jenis Universitas</option>
                <option value={'PTS'}>PTS</option>
                <option value={'PTN'}>PTN</option>
              </select>
            </div>
            <div className="w-1/2 space-y-2">
              <label className="text-lg font-medium">Akreditasi Universitas</label>
              <select className="rounded-lg w-full p-3 bg-white text-sm focus:outline-none border border-nero-20"
                onChange={(e) => setAkreditasi(e.target.value)}
              >
                <option selected disabled value={''}>Pilih Akreditasi Universitas</option>
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value={'C'}>C</option>
                <option value={'D'}>D</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mr-4 space-y-2">
              <label className="text-lg font-medium">Semester Mahasiswa</label>
              <input
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                placeholder="Masukkan Semester Mahasiswa"/>
            </div>
            <div className="w-1/2 space-y-2">
              <label className="text-lg font-medium">IPK Semester Mahasiswa</label>
              <input
                type="text"
                value={ips}
                onChange={(e) => setIps(e.target.value)}
                className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                placeholder="Masukkan IPK Semester"/>
            </div>
          </div>
          <div className="flex justify-end items-center pt-4 text-white">
            <button
              className="bg-primary-20 px-4 py-2 rounded-md"
            >
            Tambah Data Mahasiswa
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
