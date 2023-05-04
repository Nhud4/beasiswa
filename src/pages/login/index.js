import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/form/login';

export default function Login(){
  return(
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-1">
        <div className="flex flex-col justify-center items-center mb-4">
          <Image className="w-[6rem] mb-2" src={require('@/assets/img/dispen.png')} alt="icon" />
          <div className="font-semibold text-20">Masuk Aplikasi</div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
