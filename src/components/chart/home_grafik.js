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

const labels = ['KIP', 'KPM', 'SKTM', 'PKH', 'PTN', 'PTS', 'IPK'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Lulus',
      data: [50, 17, 60, 54, 33 ,170, 90],
      backgroundColor: 'rgba(31, 40, 85, 1)',
    },
    {
      label: 'Tidak Lulus',
      data: [8, 10, 65, 88, 75, 44, 31],
      backgroundColor: 'rgba(0, 147, 173, 1)',
    },
  ],
};

export function GrafikHome() {
  return (
    <div className="bg-white p-4 rounded-md shadow-1">
      <Bar options={options} data={data} />
    </div>
  );
}
