import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { decode } from 'jsonwebtoken';
import { getToken } from '@/utils/server/localstorage';

export default function Profile(){
  const token = getToken();
  const router = useRouter();
  useEffect(() =>{
    if(!token){
      router.replace('/login');
    }
  },[token]);
  const user = decode(token);
  return(
    <>
      <div className="flex bg-primary-20 w-[159px] h-[49px] rounded-full shadow-1">
        <Image className="w-fit bg-white rounded-full shadow p-1 m-1" src={require('@/assets/img/user.png')} alt="user" />
        <div className="text-white p-1">
          <div className="text-16 font-semibold">{user.username}</div>
          <div className="text-12 -mt-1">{user.userType}</div>
        </div>
      </div>
    </>
  );
}
