import React from 'react';
import Image from 'next/image';
import { HomeChart } from '@/components/chart/home_chart';
import { GrafikHome } from '@/components/chart/home_grafik';
import SummaryCard from '@/components/card/summary';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container mt-[2rem]">
        <div className="grid grid-cols-4 gap-6 px-4">
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Blue.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Totap Pendaftar</div>
                <div>500</div>
              </div>
            </SummaryCard>
          </div>
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Green.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Pendaftar Lulus</div>
                <div>250</div>
              </div>
            </SummaryCard>
          </div>
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Red.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Pendaftar Tidak Lulus</div>
                <div>250</div>
              </div>
            </SummaryCard>
          </div>
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Blue-navi.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Kuota Beasiswa</div>
                <div>1000</div>
              </div>
            </SummaryCard>
          </div>
          <div className="col-span-3">
            <GrafikHome />
          </div>
          <div>
            <HomeChart />
          </div>
        </div>
      </div>
    </div>
  );
}
