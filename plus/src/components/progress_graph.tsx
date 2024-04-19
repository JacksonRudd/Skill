import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import { loadScores } from '../backend/storage'
import Score from '../model/score'

// Register the TimeScale along with the other components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  scales: {
    x: {
      type: 'time' as const,
      time: {
        unit: 'day' as const,
      },
    },
  },
}

function ProgressGraph() {
  const scores: Score[] = loadScores()
  const labels: string[] = scores.map((x) => x.time.toISOString()) // Convert dates to string format

  const data = {
    labels, // Use labels for dates
    datasets: [
      {
        label: 'Dataset 1',
        data: scores.map((x) => ({ x: x.time.toISOString(), y: x.score })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default ProgressGraph
