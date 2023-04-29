import React from 'react';
import Image from 'next/image';
import Profile from '../card/Profile';
import SummaryCard from '../card/summary';

export default function Header(){
  return(
    <>
      <div className="absolute left-0 top-0 w-full h-[11rem] bg-primary-10">
        <div className="pl-[13.5rem] pr-5 pt-5">
          <div className="flex justify-between mb-8">
            <div className="text-white">
              <div className="font-semibold text-35">Aplikasi Beasiswa Satu Desa Dua Sarjana</div>
              <div className="font-medium text-20">Dinas Pendidikan Kabupaten Bojonegoro</div>
            </div>
            <Profile />
          </div>
          <div className="flex justify-between w-full">
            <SummaryCard>
              <Image className="w-fit rounded-full shadow" src={require('@/assets/icon/Blue.svg')} alt="icon" />
              <div>
                <div>Totap Pendaftar Beasiswa</div>
                <div>500</div>
              </div>
            </SummaryCard>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow" src={require('@/assets/icon/Green.svg')} alt="icon" />
              <div>
                <div>Pendaftar Lolos</div>
                <div>500</div>
              </div>
            </SummaryCard>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow" src={require('@/assets/icon/Red.svg')} alt="icon" />
              <div>
                <div>Pendaftar Tidak Lolos</div>
                <div>500</div>
              </div>
            </SummaryCard>
          </div>
        </div>
      </div>
    </>
  );
}
