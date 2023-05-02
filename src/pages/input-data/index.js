import React from 'react';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import Form from '@/components/form';

export default function InputData(){
  return(
    <>
      <Header />
      <Sidebar />
      <div className="flex justify-center mt-8">
        <div className="container mt-[2.5rem]">
          <div className="flex justify-start bg-white rounded-lg p-3 shadow-1">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
