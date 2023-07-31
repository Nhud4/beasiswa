import React from 'react';
import HomeTable from '@/components/table';

export default function Data(){
  return(
    <div className="flex justify-center my-8">
      <div className="container">
        <div className="flex justify-start">
          <HomeTable />
        </div>
      </div>
    </div>
  );
}
