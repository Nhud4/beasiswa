import React from 'react';

export default function SummaryCard({ children }){
  return(
    <>
      <div className="flex justify-start items-center bg-white h-[5rem] w-full space-x-4 rounded-lg shadow-1 pl-4">
        {children}
      </div>
    </>
  );
}
