import React from 'react';
import Image from 'next/image';
import Profile from '../card/Profile';
import SummaryCard from '../card/summary';

export default function Header({ summary }){
  return(
    <>
      <div className="fixed left-0 top-0 w-full bg-primary-10 h-[8rem]">
        <div className="pl-[13.5rem] pr-5 pt-5">
          <div className="flex justify-between mb-8">
            <div className="text-white">
              <div className="font-semibold text-35">Aplikasi Beasiswa Satu Desa Dua Sarjana</div>
              <div className="font-medium text-20">Dinas Pendidikan Kabupaten Bojonegoro</div>
            </div>
            <Profile />
          </div>
          {summary ? (
            <div className="flex justify-between w-full">
              <SummaryCard>
                <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Blue.svg')} alt="icon" />
                <div>
                  <div className="font-semibold">Totap Pendaftar Beasiswa</div>
                  <div>500</div>
                </div>
              </SummaryCard>
              <SummaryCard>
                <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Green.svg')} alt="icon" />
                <div>
                  <div className="font-semibold">Pendaftar Lolos</div>
                  <div>500</div>
                </div>
              </SummaryCard>
              <SummaryCard>
                <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Red.svg')} alt="icon" />
                <div>
                  <div className="font-semibold">Pendaftar Tidak Lolos</div>
                  <div>500</div>
                </div>
              </SummaryCard>
            </div>
          ):(
            <div className="border-b pb-2 border-nero-20">
              <h1 className="font-semibold text-22">Form Input Data Pengajuan Mahasiswa</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
