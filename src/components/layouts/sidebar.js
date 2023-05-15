import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi2';
import { useRouter } from 'next/router';
import { removeToken } from '@/utils/server/localstorage';

export default function Sidebar({ page }){
  const router = useRouter();
  const data = [
    'bg-primary-20 text-white',
    'bg-white text-primary-20 hover:bg-primary-20 hover:text-white'
  ];

  const handelLogout = () =>{
    removeToken('accessToken');
    router.push('/login');
  };
  return(
    <div className="fixed left-0 top-0 h-full w-[13rem] p-2">
      <div className="w-full h-full rounded-md bg-white shadow-1">
        <div className="p-4">
          <div className="flex justify-center items-center">
            <Image className="w-[8rem] mr-2" src={require('@/assets/img/logo1.svg')} alt="icon" />
          </div>
          <div className="text-center">
            <div className="font-bold">Dinas Pendidikan</div>
            <div className="text-14">Kab. Bojonegoro</div>
          </div>
        </div>
        <ul>
          <li className={`pl-4 ${page === 'home' ? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-10" href="/">
              <HiHome className="text-22 mr-2"/> Home
            </Link>
          </li>
          <li className={`pl-4 ${page === 'data' ? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-10" href="/data">
              <HiDocumentText className="text-22 mr-2"/> Data Mahasiswa
            </Link>
          </li>
        </ul>
        <div className="absolute inset-x-0 bottom-0">
          <div className="p-8">
            <div className="flex justify-center items-center">
              <div className="bg-danger-20 text-white p-2 w-full rounded-lg text-center cursor-pointer" onClick={handelLogout}>Keluar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
