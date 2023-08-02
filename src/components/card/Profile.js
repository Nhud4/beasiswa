import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { decode } from 'jsonwebtoken';
import { getToken } from '@/utils/server/localstorage';

export default function Profile({ type }){
  const [userData, setUserData] = useState([]);
  const token = getToken();
  const user = decode(token) || '';

  useEffect(() => {
    if(user){
      setUserData(user);
    }
  }, []);

  const capitalizeFirst = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  };

  return(
    <>
      {type === 'button' ? (
        <div className="flex items-center space-x-2 bg-primary-20 rounded-lg shadow-1 px-2 py-1">
          <Image className="w-fit h-[40px]" src={require('@/assets/img/user.png')} alt="user" />
          <div className="text-white p-1">
            <div className="text-15 font-semibold">
              <p>{capitalizeFirst(userData?.name)}</p>
            </div>
            <div className="text-11 -mt-[0.10rem]">{capitalizeFirst(userData?.userType)} Aplikasi</div>
          </div>
        </div>
      ):(
        <div className="flex items-center space-x-2 bg-white h-[42px] px-2">
          <div className="text-white text-12">{userData?.username}</div>
          <div className="text-white">Text</div>
          <Image className="w-fit h-[45px]" src={require('@/assets/img/user.png')} alt="user" />
        </div>
      )}
    </>
  );
}
