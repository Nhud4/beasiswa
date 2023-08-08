import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DetailChart({ nilai }) {

  const data = {
    labels: ['Tidak Lulus', 'Lulus'],
    datasets: [
      {
        data: [nilai?.lulus || 0.1, nilai?.tidakLulus || 0.1],
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

  return(
    <>
      <div className="py-4 px-2 rounded-lg border-2 border-nero-20">
        <Doughnut
          data={data}
          options={{
            plugins:{
              legend: {
                display: false
              }
            }
          }}
        />
        <div className="flex justify-between items-center mt-8">
          <div className="border border-nero-20 rounded-md text-sm px-4 py-2">
            <div className="flex items-center">
              <div className="bg-primary-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-primary-10">Lulus</div>
            </div>
          </div>
          <div className="border border-nero-20 rounded-md text-sm px-4 py-2">
            <div className="flex items-center">
              <div className="bg-danger-10 w-3 h-3 rounded-full mr-2"/>
              <div className="text-danger-10">Tidak Lulus</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
