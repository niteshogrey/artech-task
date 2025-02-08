
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ShoppingBag, BarChart2 } from 'lucide-react';
import { Card } from '@mui/material';


export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-lg rounded-lg border border-gray-100 p-2">
          {payload.map((entry, index) => (
            <div key={index} className="text-sm">
              {entry.name === "reality" ? "Reality: " : "Target: "}
              {entry.value}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  
const TargetRealityChart = () => {
  const data = [
    { month: 'Jan', reality: 45, target: 55 },
    { month: 'Feb', reality: 38, target: 48 },
    { month: 'Mar', reality: 35, target: 58 },
    { month: 'Apr', reality: 40, target: 45 },
    { month: 'May', reality: 48, target: 62 },
    { month: 'June', reality: 45, target: 52 },
    { month: 'July', reality: 48, target: 58 }
  ];

  return (
    <Card variant='outlined' sx={{ width: '100%' }}  className="bg-white p-6 ">
      <h2 className="text-xl font-bold text-indigo-900 mb-6">Target vs Reality</h2>
      
      <div className="h-[193px] ">
        <ResponsiveContainer viewBox="50, 50, 150, 200" height={200} width={300} >
          <BarChart data={data} barGap={10} >
            <XAxis 
              dataKey="month" 
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
              dataKey="reality" 
              fill="#4ade80" 
              radius={[4, 4, 4, 4]} 
              name="Reality"
            />
            <Bar 
              dataKey="target" 
              fill="#fbbf24" 
              radius={[4, 4, 4, 4]} 
              name="Target"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-start space-x-8 mt-1 pt-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <ShoppingBag className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Reality Sales</div>
            <div className="text-xs text-gray-400">Global</div>
            <div className="text-lg font-semibold text-gray-900">8,823</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <BarChart2 className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Target Sales</div>
            <div className="text-xs text-gray-400">Commercial</div>
            <div className="text-lg font-semibold text-gray-900">12,122</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TargetRealityChart;