import React from 'react';
import Image from 'next/image';

export default function Profile(){
  return(
    <>
      <div className="flex bg-primary-20 w-[159px] h-[49px] rounded-full">
        <Image className="w-fit bg-white rounded-full shadow p-1 m-1" src={require('@/assets/img/user.png')} alt="user" />
        <div className="text-white p-1">
          <div className="text-16">Admin Nih</div>
          <div className="text-11">Admin Aplikasi</div>
        </div>
      </div>
    </>
  );
}
