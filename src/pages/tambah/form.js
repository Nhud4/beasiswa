import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import Server from '@/utils/server';

export default function FormAdd(){
  const server = new Server();
  const router = useRouter();

  const [name, setName] = useState('');
  const [nik, setNik]= useState('');
  const [noKk, setNoKk] = useState('');
  const [ayah, setAyah] = useState('');
  const [nim, setNim] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [umur, setUmur] = useState('');
  const [ibu, setIbu] = useState('');
  const [address, setAddress] = useState('');
  const [desa, setDesa] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [noHp, setNoHp] = useState('');
  const [univ, setUniv] = useState('');
  const [fakultas, setFakultas] = useState('');
  const [prodi, setProdi] = useState('');
  const [semester, setSemester] = useState('');
  const [khs, setKhs] = useState({});
  const [jenisUniv, setJenisUniv] = useState('');
  const [akreditasi, setAkreditasi] = useState('');
  const [bank, setBank] = useState('');
  const [noRek, setNoRek] = useState('');
  const [jenisKartu, setJenisKartu] = useState('KPM');
  const [ukt, setUkt] = useState('');
  const [gender, setGender] = useState('');

  const kartu = [
    { label: 'KPM', value: 'KPM' },
    { label: 'KIP', value: 'KIP' },
    { label: 'PKH', value: 'PKH' },
    { label: 'SKTM', value: 'SKTM' },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    const insertData = {
      nama_mahasiswa: name,
      nik: nik,
      no_kk: noKk,
      kepala_keluarga: ayah,
      nim: nim,
      tempat_lahir: tempatLahir,
      tanggal_lahir: tanggalLahir,
      umur: parseInt(umur),
      nama_ibu: ibu,
      alamat: address,
      desa: desa,
      kecamatan: kecamatan,
      kabupaten: kabupaten,
      no_hp: noHp,
      universitas: univ,
      fakultas: fakultas,
      prodi: prodi,
      semester: semester,
      nilai_khs: [khs.sm1, khs.sm2, khs.sm3, khs.sm4, khs.sm5, khs.sm6, khs.sm7, khs.sm8],
      jenis_univ: jenisUniv,
      akreditasi: akreditasi,
      bank: bank,
      no_rekening: noRek,
      jenis_kartu: jenisKartu,
      ukt: parseInt(ukt),
      gender: gender,
    };

    const response = await server.inputData(insertData);
    if(response.code === 201){
      alert('Berhasil Menambahkan Data', router.replace('/data'));
    }else{
      alert(response?.message);
    }
  };

  const disabled = Boolean(
    name && nik && noKk && ayah && nim && tempatLahir && tanggalLahir && umur &&
    ibu && address && desa && kecamatan && kabupaten && noHp && univ && fakultas &&
    prodi && semester && jenisUniv && akreditasi && jenisKartu && ukt
  );
  return(
    <form onSubmit={handleSubmit}>
      <div className="bg-white w-full p-4 rounded-md shadow-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h2>Nama Mahasiswa</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nama Mahasiswa"
                className="outline-none w-full"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nomor NIK Mahasiswa</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan NIK Mahasiswa"
                className="outline-none w-full"
                onChange={(e) => setNik(e.target.value)}
                value={nik}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nomor KK Mahasiswa</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan KK Mahasiswa"
                className="outline-none w-full"
                onChange={(e) => setNoKk(e.target.value)}
                value={noKk}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Jenis kelamin</h2>
            <div className="border border-nero-20 px-2 rounded-md">
              <select
                className="outline-none bg-white w-full h-full py-2"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value={''} disabled>Pilih Jenis Kelamin</option>
                <option value={'laki-laki'}>Laki - Laki</option>
                <option value={'perempuan'}>Perempuan</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nama Kepala Keluarga</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nama Kepala keluarga"
                className="outline-none w-full"
                onChange={(e) => setAyah(e.target.value)}
                value={ayah}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nama Ibu</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nama Ibu"
                className="outline-none w-full"
                onChange={(e) => setIbu(e.target.value)}
                value={ibu}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <h2>Nomor Induk Mahasiswa</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nomor Induk Mahasiswa"
                className="outline-none w-full"
                onChange={(e) => setNim(e.target.value)}
                value={nim}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Tempat Lahir</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Tempat Lahir"
                className="outline-none w-full"
                onChange={(e) => setTempatLahir(e.target.value)}
                value={tempatLahir}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Tanggal Lahir</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="DD-MM-YYYY"
                className="outline-none w-full"
                onChange={(e) => setTanggalLahir(e.target.value)}
                value={tanggalLahir}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Usia</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Usia"
                className="outline-none w-full"
                onChange={(e) => setUmur(e.target.value)}
                value={umur}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nomor Hp</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="085100000000"
                className="outline-none w-full"
                onChange={(e) => setNoHp(e.target.value)}
                value={noHp}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Kartu Pendukung</h2>
            <Radio.Group className="mt-2" onChange={(e) => setJenisKartu( e.target.value)} value={jenisKartu}>
              <div className="md:flex">
                {kartu.map(({ label, value }) => (
                  <Radio key={label} name="kartu" value={value}>{label}</Radio>
                ))}
              </div>
            </Radio.Group>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="space-y-2 col-span-3">
            <h2>Alamat</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Alamat"
                className="outline-none w-full"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Desa</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Desa"
                className="outline-none w-full"
                onChange={(e) => setDesa(e.target.value)}
                value={desa}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Kecamatan</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Kecamatan"
                className="outline-none w-full"
                onChange={(e) => setKecamatan(e.target.value)}
                value={kecamatan}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Kabupaten</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Kabupaten"
                className="outline-none w-full"
                onChange={(e) => setKabupaten(e.target.value)}
                value={kabupaten}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="space-y-2 col-span-2">
            <h2>Asal Universitas</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Asal Universitas"
                className="outline-none w-full"
                onChange={(e) => setUniv(e.target.value)}
                value={univ}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Jenis Universitas</h2>
            <div className="border border-nero-20 px-2 rounded-md">
              <select
                className="outline-none bg-white w-full h-full py-2"
                onChange={(e) => setJenisUniv(e.target.value)}
                value={jenisUniv}
              >
                <option value={''} disabled>Pilih Jenis Universitas</option>
                <option value={'PTN'}>PTN</option>
                <option value={'PTS'}>PTS</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <h2>Akreditasi Universitas</h2>
            <div className="border border-nero-20 px-2 rounded-md">
              <select
                className="outline-none bg-white w-full h-full py-2"
                onChange={(e) => setAkreditasi(e.target.value)}
                value={akreditasi}
              >
                <option value={''} disabled>Pilih Akreditasi</option>
                <option value={'A'}>Akreditasi A</option>
                <option value={'B'}>Akreditasi B</option>
                <option value={'C'}>Akreditasi C</option>
                <option value={'D'}>Akreditasi D</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <h2>Fakultas</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Fakultas"
                className="outline-none w-full"
                onChange={(e) => setFakultas(e.target.value)}
                value={fakultas}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Program Study</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Program Study"
                className="outline-none w-full"
                onChange={(e) => setProdi(e.target.value)}
                value={prodi}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>UKT</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan UKT"
                className="outline-none w-full"
                onChange={(e) => setUkt(e.target.value)}
                value={ukt}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <h2>Semester</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Semester"
                className="outline-none w-full"
                onChange={(e) => setSemester(e.target.value)}
                value={semester}
              />
            </div>
          </div>
          <div className="space-y-2 col-start-1">
            <h2>Nilai Semester 1</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm1: e.target.value })}
                value={khs?.sm1}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 2</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm2: e.target.value })}
                value={khs?.sm2}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 3</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm3: e.target.value })}
                value={khs?.sm3}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 4</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm4: e.target.value })}
                value={khs?.sm4}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 5</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm5: e.target.value })}
                value={khs?.sm5}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 6</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm6: e.target.value })}
                value={khs?.sm6}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 7</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm7: e.target.value })}
                value={khs?.sm7}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nilai Semester 8</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nilai Semester"
                className="outline-none w-full"
                onChange={(e) => setKhs({ ...khs, sm8: e.target.value })}
                value={khs?.sm8}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <h2>Bank</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Bank"
                className="outline-none w-full"
                onChange={(e) => setBank(e.target.value)}
                value={bank}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2>Nomor Rekening</h2>
            <div className="border border-nero-20 p-2 rounded-md">
              <input
                placeholder="Masukkan Nomor Rekening"
                className="outline-none w-full"
                onChange={(e) => setNoRek(e.target.value)}
                value={noRek}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-8 space-x-4">
          <button className="border px-10 py-2 rounded-md">
            Batal
          </button>
          <button
            className={!disabled ? 'bg-nero-20 text-white px-10 py-2 rounded-md cursor-not-allowed':'bg-primary-50 text-white px-10 py-2 rounded-md cursor-pointer'}
            disabled={!disabled}>
            Simpan
          </button>
        </div>
      </div>
    </form>
  );
}
