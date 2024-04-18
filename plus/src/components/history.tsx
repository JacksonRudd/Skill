import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { loadScores } from '../backend/storage'
import Score from '../model/score'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

function History() {
  const scores: Score[] = loadScores()
  const labels: string[] = scores.map((x) => x.time.toISOString()) // Convert dates to string format

  const data = {
    labels, // Use labels instead of dates
    datasets: [
      {
        label: 'Dataset 1',
        data: scores.map((x) => x.score),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default History
