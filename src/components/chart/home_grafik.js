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

const labels = ['KIP', 'KPM', 'SKTM', 'PKH', 'PTN', 'PTS'];

export function GrafikHome({ value }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Lulus',
        data: [
          value?.dataKIP?.lulus,
          value?.dataKPM?.lulus,
          value?.dataSKTM?.lulus,
          value?.dataPKH?.lulus,
          value?.dataPTN?.lulus,
          value?.dataPTS?.lulus
        ],
        backgroundColor: 'rgba(31, 40, 85, 1)',
      },
      {
        label: 'Tidak Lulus',
        data: [
          value?.dataKIP?.tidak,
          value?.dataKPM?.tidak,
          value?.dataSKTM?.tidak,
          value?.dataPKH?.tidak,
          value?.dataPTN?.tidak,
          value?.dataPTS?.tidak
        ],
        backgroundColor: 'rgba(0, 147, 173, 1)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-1">
      <Bar options={options} data={data} />
    </div>
  );
}
