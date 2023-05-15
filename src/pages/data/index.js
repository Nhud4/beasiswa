import React from 'react';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import HomeTable from '@/components/table';

export default function Data(){
  return(
    <>
      <Header />
      <Sidebar page={'data'}/>
      <div className="flex justify-center my-8">
        <div className="container">
          <div className="flex justify-start">
            <HomeTable />
          </div>
        </div>
      </div>
    </>
  );
}
