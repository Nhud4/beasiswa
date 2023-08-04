import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi2';
import { MdAssignmentAdd } from 'react-icons/md';
import Profile from '../card/Profile';

export default function Sidebar({ page, hidden }){
  const data = [
    'bg-primary-70 text-white',
    'text-white opacity-50 hover:bg-primary-70 hover:text-white hover:opacity-100'
  ];

  return(
    <div className="fixed left-0 top-0 h-full" hidden={hidden}>
      <div className="w-[15rem] h-full bg-primary-50">
        <div className="px-1 py-4 border-b-2 border-primary-60">
          <div className="flex items-center">
            <Image className="w-[50px] mr-2" src={require('@/assets/img/logo.png')} alt="icon" />
            <p className="text-[14px] text-white">
                Dinas Pendidikan <br />
                Kab. Bojonegoro
            </p>
          </div>
        </div>
        <ul className="mt-2">
          <li className={`pl-4 ${page === 'home' ? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-12" href="/">
              <HiHome className="text-22 mr-2"/> Home
            </Link>
          </li>
          <li className={`pl-4 ${page === 'data' ? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-12" href="/data">
              <HiDocumentText className="text-22 mr-2"/> Data Mahasiswa
            </Link>
          </li>
          <li className={`pl-4 ${page === 'tambah' ? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-12" href="/tambah">
              <MdAssignmentAdd className="text-22 mr-2"/> Tambah Data
            </Link>
          </li>
        </ul>
        <div className="absolute inset-x-0 bottom-0 w-[14rem] p-4">
          <Profile type="button"/>
        </div>
      </div>
    </div>
  );
}
