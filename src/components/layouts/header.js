import React, { useEffect, useState } from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/router';
import { removeToken } from '@/utils/server/localstorage';
import Profile from '../card/Profile';

export default function Header(){
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handelLogout = () =>{
    removeToken('accessToken');
    router.push('/login');
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return(
    <div className="bg-white p-4">
      <div onClick={() => setShow(() => setShow(true))} className="cursor-pointer">
        <Profile />
      </div>
      <OutsideClickHandler onOutsideClick={() => setShow(true)}>
        <div className="absolute right-0 p-4" hidden={show} >
          <div
            className="flex items-center space-x-2 p-2 bg-white rounded-md shadow-1 border border-[#EBF6F8] cursor-pointer"
            onClick={handelLogout}
          >
            <RiLogoutCircleRLine className="text-sm text-[#767676] font-light"/>
            <div className="text-sm text-[#767676] font-light">Logout</div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
