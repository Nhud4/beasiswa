import React from 'react';
import HomeTable from '@/components/table';
import HeaderPage from '@/components/card/titleBoard';

export default function Data(){
  return(
    <div className="flex justify-center my-8">
      <div className="container">
        <div className="p-2">
          <HeaderPage
            title={'Data Mahasiswa'}
            breadcrumbs={[
              {
                title: 'Dashboard',
                url: '/'
              },
              {
                title: 'Data Mahasiswa',
                url: '/data'
              },
            ]}
          />
          <HomeTable />
        </div>
      </div>
    </div>
  );
}
