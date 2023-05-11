import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import HomeTable from '@/components/table';
import { HomeChart } from '@/components/chart/home_chart';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import { getToken } from '@/utils/server/localstorage';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if(!token){
      router.push('/login');
    }
  }, []);

  return (
    <>
      <Header summary={true}/>
      <Sidebar active={true}/>
      <div className="flex justify-center my-8">
        <div className="container mt-[5.5rem]">
          <div className="flex justify-start">
            <div className="w-3/4 mr-4">
              <HomeTable />
            </div>
            <div className="w-1/4">
              <HomeChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
