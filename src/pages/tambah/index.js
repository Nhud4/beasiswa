import React from 'react';
import HeaderPage from '@/components/card/titleBoard';
import FormAdd from './form';

export default function TambahData(){
  return(
    <div className="flex justify-center my-8">
      <div className="container">
        <div className="pl-2 pr-4">
          <HeaderPage
            title={'Tambah Data Mahasiswa'}
            breadcrumbs={[
              {
                title: 'Dashboard',
                url: '/'
              },
              {
                title: 'Tambah Data Mahasiswa',
                url: '/tambah'
              },
            ]}
          />

          <FormAdd />
        </div>
      </div>
    </div>
  );
}
