
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const CustomerSatisfactionChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
      
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        radius: 3,
        borderWidth: 1,
        backgroundColor: 'white',
      }
    }
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'This Month',
        data: [82, 76, 80, 74, 78, 72, 88],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: '#4ade80',
      },
      {
        label: 'Last Month',
        data: [75, 78, 72, 71, 74, 73, 76],
        borderColor: '#60a5fa',
        backgroundColor: 'rgba(96, 165, 250, 0.2)',
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: '#60a5fa',
      }
    ]
  };

  return (
    <Card variant="outlined" sx={{ width: '100%' }} className="bg-red-300   rounded-xl ">
        <CardContent>
        <Typography variant="h6" gutterBottom fontWeight={600}>Customer Satisfaction</Typography>
      
      <div className="h-[251px]">
        <Line options={options} data={data} />
      </div>

      <div className="flex items-center justify-start space-x-5 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-2 rounded bg-blue-400"></div>
          <span className="text-gray-600 text-xs">Last Month</span>
          <span className="text-gray-900 font-semibold">$3,004</span>
        </div>
        <div className="flex items-center space-x-">
          <div className="w-4 h-2 rounded bg-green-400"></div>
          <span className="text-gray-600 text-xs">This Month</span>
          <span className="text-gray-900 font-semibold">$4,504</span>
        </div>
      </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSatisfactionChart;