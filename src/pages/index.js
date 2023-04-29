import HomeTable from '@/components/table';
import { HomeChart } from '@/components/chart/home_chart';

export default function Home() {
  return (
    <div className="flex justify-center my-8">
      <div className="container">
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
  );
}
