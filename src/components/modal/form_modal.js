import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Server from '@/utils/server';


// Modal.setAppElement('#root');
export default function FormInput({ open }) {
  const server = new Server();
  const router = useRouter();
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
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    alert('yakin menutup form ?', window.location.reload());
    setOpenModal(false);
  };

  const handelAdd = async (e) =>{
    e.preventDefault();
    const result = await server.inputData({
      nama: name,
      umur: age,
      nik: nik,
      gender:gender,
      desa: desa,
      kecamatan: kecamatan,
      kabupaten: kabupaten,
      universitas:universitas,
      jenis: jenis,
      akreditasi: akreditasi,
      semester: semester,
      ips: ips
    });
    if(result.code === 201){
      alert(result.message);
      router.push('/');
    }else{
      alert(result.message);
    }
  };

  useEffect(() =>{
    if(open){
      setOpenModal(true);
    }else{
      setOpenModal(false);
    }
  }, [open]);

  const style = {
    overlay: {
      backgroundColor: 'rgb(onClick: PropTypes.func,0,0,0,0.5)',
    },
    content: {
      top: '20px',
      bottom: '0',
      left: '0',
      right: '0',
      width: '70%',
      height: '95%',
      placeItems: 'center',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  };
  return (
    <CSSTransition in={openModal} timeout={300} classNames="dialog">
      <Modal
        isOpen={openModal}
        ariaHideApp={false}
        style={style}
        closeTimeoutMS={500}
      >
        <div className="py-4">
          <div className="flex justify-between items-center">
            <h1>From Input Data Mahasiswa</h1>
            <button onClick={handleClose}>Cancel</button>
          </div>
          <form onSubmit={handelAdd}>
            <div className="px-6 py-2 space-y-2">
              <div className="space-y-2">
                <label className="text-lg font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                  placeholder="Masukkan Nama Lengkap Mahasiswa"
                  required/>
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Nomor Induk Kependudukan (NIK)</label>
                <input
                  type="text"
                  value={nik}
                  onChange={(e)=> setNik(e.target.value)}
                  className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                  placeholder="Masukkan NIK Mahasiswa"
                  required/>
              </div>
              <div className="flex">
                <div className="w-1/2 mr-4 space-y-2">
                  <label className="text-lg font-medium">Umur</label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                    placeholder="Masukkan Umur Mahasiswa"
                    required/>
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
                    placeholder="Desa"
                    required/>
                </div>
                <div className="w-1/2 space-y-2">
                  <label className="text-lg font-medium">Kecamatan</label>
                  <input
                    type="text"
                    value={kecamatan}
                    onChange={(e) => setKecamatan(e.target.value)}
                    className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                    placeholder="Kecamatan"
                    required/>
                </div>
              </div>
              <div className="space-y-2 w-1/2 pr-2">
                <label className="text-lg font-medium">Kabupaten</label>
                <input
                  type="text"
                  value={kabupaten}
                  onChange={(e) => setKabupaten(e.target.value)}
                  className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                  placeholder="Kabupaten"
                  required/>
              </div>
              <div className="space-y-2">
                <label className="text-lg font-medium">Asal Universitas</label>
                <input
                  type="text"
                  value={universitas}
                  onChange={(e) => setUniv(e.target.value)}
                  className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                  placeholder="Masukkan Universitas Mahasiswa"
                  required/>
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
                    <option selected disabled defaultValue={''}>Pilih Akreditasi Universitas</option>
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
                    placeholder="Masukkan Semester Mahasiswa"
                    required/>
                </div>
                <div className="w-1/2 space-y-2">
                  <label className="text-lg font-medium">IPK Semester</label>
                  <input
                    type="text"
                    value={ips}
                    onChange={(e) => setIps(e.target.value)}
                    className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none placeholder:text-base w-full"
                    placeholder="Masukkan IPK Semester"
                    required/>
                </div>
              </div>
              <div className="flex justify-end items-center pt-4 text-white">
                <button className="bg-primary-20 px-4 py-2 rounded-md">Tambah Data Mahasiswa</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </CSSTransition>
  );
}
