import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/form/login';

export default function Login(){
  return(
    <div className="flex flex-col justify-center items-center -mt-10">
      <div className="flex justify-center items-center space-x-4">
        <Image className="md:w-[5rem] w-[4rem] mb-2" src={require('@/assets/img/dispen.png')} alt="icon" />
        <div>
          <h1 className="md:text-[38px] text-[28px] font-semibold text-primary-20">
            Satu Desa Dua Sarjana
          </h1>
          <p className="text-xl text-primary-20">Dinas Pendidikan Kabupaten Bojonegoro</p>
        </div>
      </div>
      <div className="font-semibold text-20 text-[#8E8E8E] my-6">
        <p>Selamat Datang, Admin Aplikasi.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-1 w-1/2">
        <LoginForm />
      </div>
    </div>
  );
}
