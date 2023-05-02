import React, { useState } from 'react';

export default function Form(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nik, setNik] = useState('');
  const [kk, setKK] = useState('');
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
    const data = {
      name: name,
      age: age,
      gender: gender,
      nik: nik,
      kk: kk,
      desa: desa,
      kecamatan: kecamatan,
      kabupaten: kabupaten,
      universitas: universitas,
      jenis: jenis,
      akreditasi: akreditasi,
      semester: semester,
      ips: ips
    };
    alert(data);
  };
  return(
    <>
      <form className="w-full" onSubmit={handelAdd}>
        <div className="flex justify-center items-center grid gap-4 grid-cols-6 w-full">
          <div className="col-span-4 space-y-2">
            <label className="font-medium">Nama Lengkap</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama Lengkap"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Umur</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Umur"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Jenis Kelamin</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full h-full">
              <select className="rounded-lg w-full h-10 p-2 bg-white" onChange={(e) => setGender(e.target.value)}>
                <option selected disabled value={''}>Pilih Jenis Kelamin</option>
                <option value={'laki-laki'}>Laki-laki</option>
                <option value={'perempuan'}>Perempuan</option>
              </select>
            </div>
          </div>
          <div className="col-span-3 space-y-2">
            <label className="font-medium">NIK Mahasiswa</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="NIK Mahasiswa"/>
            </div>
          </div>
          <div className="col-span-3 space-y-2">
            <label className="font-medium">Nomor Katru Keluarga</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={kk}
                onChange={(e) => setKK(e.target.value)}
                placeholder="Nomor KK"/>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <label className="font-medium">Desa</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={desa}
                onChange={(e) => setDesa(e.target.value)}
                placeholder="Desa"/>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <label className="font-medium">Kecamatan</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
                placeholder="Kecamatan"/>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <label className="font-medium">Kabupaten</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={kabupaten}
                onChange={(e) => setKabupaten(e.target.value)}
                placeholder="Kabupaten"/>
            </div>
          </div>
          <div className="col-span-2 space-y-2">
            <label className="font-medium">Universitas</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={universitas}
                onChange={(e) => setUniv(e.target.value)}
                placeholder="Universitas"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Jenis</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
                placeholder="Universitas"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Akreditasi</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <select className="rounded-lg w-full h-10 p-2 bg-white" onChange={(e) => setAkreditasi(e.target.value)}>
                <option selected disabled value={''}>Pilih Akreditasi</option>
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
                <option value={'C'}>C</option>
                <option value={'D'}>D</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">Semester</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="Semester"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium">IPS</label>
            <div className="flex border-nero-20 border rounded-lg overflow-hidden w-full">
              <input
                type="text"
                className="rounded-lg w-full h-10 p-2 placeholder:text-base"
                value={ips}
                onChange={(e) => setIps(e.target.value)}
                placeholder="IPS"/>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-6 border-t border-nero-20 pt-4 text-white">
          <button
            type="sumbite"
            className="bg-primary-20 px-4 py-2 rounded-md">
            Tambah Data Mahasiswa
          </button>
        </div>
      </form>
    </>
  );
}
