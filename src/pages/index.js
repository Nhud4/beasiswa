import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HomeChart } from '@/components/chart/home_chart';
import { GrafikHome } from '@/components/chart/home_grafik';
import SummaryCard from '@/components/card/summary';
import Server from '@/utils/server';

export default function Home() {
  const server = new Server();
  const [data, setData] = useState([]);

  const dataSummary = async() => {
    const result = await server.summary();
    setData(result.data);
  };

  useEffect(() => {
    dataSummary();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container mt-[2rem]">
        <div className="grid grid-cols-4 gap-6 px-4">
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Blue.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Totap Pendaftar</div>
                <div>{data?.totalData}</div>
              </div>
            </SummaryCard>
          </div>
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Green.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Pendaftar Lulus</div>
                <div>{data?.dataLulus}</div>
              </div>
            </SummaryCard>
          </div>
          <div>
            <SummaryCard>
              <Image className="w-fit rounded-full shadow-2" src={require('@/assets/icon/Red.svg')} alt="icon" />
              <div>
                <div className="text-sm font-semibold mb-1">Pendaftar Tidak Lulus</div>
                <div>{data?.dataTidakLulus}</div>
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
            <GrafikHome value={data}/>
          </div>
          <div>
            <HomeChart value={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}
