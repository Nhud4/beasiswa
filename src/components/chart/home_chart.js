import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 117, 85, 1)',
        'rgba(35, 123, 159, 1)',
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export function HomeChart() {
  return(
    <>
      <div className="bg-white py-4 px-2 rounded-lg shadow-1">
        <Doughnut data={data}
          options={{
            plugins:{
              legend: {
                display: false
              }
            }
          }}/>
        <div className="flex justify-center items-center space-x-2 mt-4">
          <div className="border border-nero-20 rounded-md p-1 text-14">
            <div className="text-center font-medium">200 Mahasiswa</div>
            <div className="flex justify-center items-center">
              <div className="bg-primary-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-primary-10">Lolos</div>
            </div>
          </div>
          <div className="border border-nero-20 rounded-md p-1 text-14">
            <div className="text-center font-medium">200 Mahasiswa</div>
            <div className="flex justify-center items-center">
              <div className="bg-danger-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-danger-10">Tidak Lolos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
