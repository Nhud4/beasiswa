import React from 'react';
import { HomeChart } from '@/components/chart/home_chart';
import { GrafikHome } from '@/components/chart/home_grafik';

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className="container mt-[4rem]">
          <div className="grid grid-cols-4 gap-6 px-4">
            <div className="col-span-3">
              <GrafikHome />
            </div>
            <div className="">
              <HomeChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
