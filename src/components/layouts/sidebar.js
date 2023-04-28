import React from 'react';

export default function Sidebar(){
  return(
    <div className="absolute left-0 top-0 h-full w-[12rem] p-2">
      <div className="w-full h-full p-4 rounded-md bg-white">
        <span className="flex justify-center ">Sidebar</span>
        <ul>
          <li className="flex justify-start items-center">Home</li>
          <li className="flex justify-start items-center">Home</li>
          <li className="flex justify-start items-center">Home</li>
          <li className="flex justify-start items-center">Home</li>
        </ul>
      </div>
    </div>
  );
}
