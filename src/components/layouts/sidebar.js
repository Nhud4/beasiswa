import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi2';

export default function Sidebar(){
  const [select, setSelect] = useState(true);

  const data = [
    'bg-primary-20 text-white',
    'bg-white text-primary-20 hover:bg-primary-20 hover:text-white'
  ];
  return(
    <div className="absolute left-0 top-0 h-full w-[13rem] p-2">
      <div className="w-full h-full rounded-md bg-white shadow">
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
          <li className={`pl-4 mb-1 ${select? data[0]:data[1]}`}>
            <Link className="flex justify-start items-center font-medium h-10" href="#" onClick={() => setSelect(true)}>
              <HiHome className="text-22 mr-2"/> Home
            </Link>
          </li>
          <li className={`pl-4 ${select? data[1]:data[0]}`}>
            <Link className="flex justify-start items-center font-medium h-10" href="#" onClick={() => setSelect(false)}>
              <HiDocumentText className="text-22 mr-2"/> Form Input Data
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
