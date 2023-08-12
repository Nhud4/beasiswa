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
          nilai?.niliaiLulus?.umur,
          nilai?.niliaiLulus?.ips,
          nilai?.niliaiLulus?.katru,
          nilai?.niliaiLulus?.univ,
          nilai?.niliaiLulus?.akreditasi
        ],
        backgroundColor: 'rgba(31, 40, 85, 1)',
      },
      {
        label: 'Tidak Lulus',
        data: [
          nilai?.nilaiTidalLulus?.umur,
          nilai?.nilaiTidalLulus?.ips,
          nilai?.nilaiTidalLulus?.katru,
          nilai?.nilaiTidalLulus?.univ,
          nilai?.nilaiTidalLulus?.akreditasi
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
