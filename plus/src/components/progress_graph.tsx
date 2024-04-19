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
import { Scatter } from 'react-chartjs-2'
import 'chart.js/auto'
import 'chartjs-adapter-date-fns'

import { TimeSeriesDatapoint } from '../model/TimeSeriesDatapoint'

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

function ProgressGraph({
  series,
  title,
}: {
  series: TimeSeriesDatapoint[]
  title: string
}) {
  const labels: string[] = series.map((x) => x.getTime().toISOString()) // Convert dates to string format

  const data = {
    labels, // Use labels for dates
    datasets: [
      {
        label: title,
        data: series.map((x) => ({
          x: x.getTime().toISOString(),
          y: x.getValue(),
        })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return <Scatter options={options} data={data} />
}

export default ProgressGraph
