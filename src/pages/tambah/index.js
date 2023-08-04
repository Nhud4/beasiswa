import React from 'react';
import FormAdd from './form';

export default function TambahData(){
  return(
    <div className="flex justify-center my-8">
      <div className="container">
        <div className="pr-4">
          <h1 className="text-xl font-semibold mb-4">Tambah Data Mahasiswa</h1>
          <FormAdd />
        </div>
      </div>
    </div>
  );
}
