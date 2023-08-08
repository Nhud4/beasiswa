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


export function DetailGrafik({ nilai }) {
  const data = {
    labels: ['UMUR', 'IPS', 'KARTU PENDUKUNG', 'UNIVERSITAS', 'AKREDITASI',],
    datasets: [
      {
        label: 'Lulus',
        data: [
          nilai?.niliaiLulus?.umur || 0.1,
          nilai?.niliaiLulus?.ips || 0.1,
          nilai?.niliaiLulus?.katru || 0.1,
          nilai?.niliaiLulus?.univ || 0.1,
          nilai?.niliaiLulus?.akreditasi || 0.1
        ],
        backgroundColor: 'rgba(31, 40, 85, 1)',
      },
      {
        label: 'Tidak Lulus',
        data: [
          nilai?.nilaiTidalLulus?.umur || 0.1,
          nilai?.nilaiTidalLulus?.ips || 0.1,
          nilai?.nilaiTidalLulus?.katru || 0.1,
          nilai?.nilaiTidalLulus?.univ || 0.1,
          nilai?.nilaiTidalLulus?.akreditasi || 0.1
        ],
        backgroundColor: 'rgba(0, 147, 173, 1)',
      },
    ],
  };
  return (
    <div className="p-4 rounded-md border-2 border-nero-20">
      <Bar options={options} data={data} />
    </div>
  );
}
