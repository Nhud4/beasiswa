import React from 'react';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import FormInput from '@/components/form/form_input';

export default function InputData(){
  return(
    <>
      <Header />
      <Sidebar />
      <div className="flex justify-center mt-8">
        <div className="container mt-[2.5rem] p-3">
          <FormInput />
        </div>
      </div>
    </>
  );
}
