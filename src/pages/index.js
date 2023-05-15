import HomeTable from '@/components/table';
import { HomeChart } from '@/components/chart/home_chart';
import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';

export default function Home() {
  return (
    <>
      <Header summary={true}/>
      <Sidebar page={'home'}/>
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
