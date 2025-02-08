
import { Card } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100">
          {payload.map((entry, index) => (
            <div key={index} className="text-sm">
              {entry.name === 'volume' ? 'Volume: ' : 'Services: '}
              {entry.value}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
const VolumeServiceChart = () => {
  const data = [
    { name: 'Mon', volume: 800, services: 200 },
    { name: 'Tue', volume: 900, services: 250 },
    { name: 'Wed', volume: 750, services: 180 },
    { name: 'Thu', volume: 650, services: 150 },
    { name: 'Fri', volume: 500, services: 120 },
    { name: 'Sat', volume: 550, services: 130 }
  ];

  return (
    <Card variant='outlined' sx={{ height: "387px" }} className="bg-white p-6 ">
      <h2 className="text-xl font-bold text-indigo-900 mb-6">Volume vs Service Level</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="volume" 
              stackId="a"
              fill="#3b82f6" 
            />
            <Bar 
              dataKey="services" 
              stackId="a"
              fill="#4ade80"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-start space-x-8 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-gray-600">Volume</span>
          <span className="text-gray-900 font-semibold">1,135</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-gray-600">Services</span>
          <span className="text-gray-900 font-semibold">635</span>
        </div>
      </div>
    </Card>
  );
};

export default VolumeServiceChart;