import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ['UMUR', 'IPS', 'KARTU PENDUKUNG', 'UNIVERSITAS', 'AKREDITASI',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Lulus',
      data: [50, 17, 60, 54, 33],
      backgroundColor: 'rgba(31, 40, 85, 1)',
    },
    {
      label: 'Tidak Lulus',
      data: [8, 10, 65, 88, 75,],
      backgroundColor: 'rgba(0, 147, 173, 1)',
    },
  ],
};

export function DetailGrafik() {
  return (
    <div className="p-4 rounded-md border-2 border-nero-20">
      <Bar options={options} data={data} />
    </div>
  );
}
