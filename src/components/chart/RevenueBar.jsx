import { Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const offlineSale = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const onlineSale = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Mondey",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const yLabels = ["0", "5k", "10k", "15k", "20k", "25k"];

const RevenueBar = () => {
  return (
    <Card variant="outlined" sx={{ width: '100',  }}>
      <CardContent>
      <Typography variant="h6" gutterBottom fontWeight={600}>Total Revenue</Typography>
      <BarChart
       height={300}
        grid={{ horizontal: true }}
        yAxis={[
          {
            data: yLabels,
            sx: { ".MuiChartsAxis-tickLabel": { fontSize: 10 } }, // ✅ Reduce Y-axis font size
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "band",
            axisLabel: "chartText"
          },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 0,
            labelStyle: {
              fontSize: 10, // ✅ Reduce legend font size
              fill: "black",
            },
          },
        }}
        series={[
          { data: onlineSale, label: "Online Sale" },
          { data: offlineSale, label: "Offline Sale" },
        ]}
      />
      </CardContent>
    </Card>
  );
};

export default RevenueBar;
