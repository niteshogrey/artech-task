import { Card, CardContent, Container, Typography } from "@mui/material";
import { LineChart, areaElementClasses } from "@mui/x-charts/LineChart";

const redLineData = [
  250, 300, 250, 200, 250, 300, 350, 320, 280, 240, 200, 180,
];
const greenLineData = [
  280, 150, 300, 160, 210, 260, 310, 290, 250, 220, 180, 140,
];
const purpleLineData = [
  310, 200, 310, 180, 230, 280, 330, 300, 270, 230, 190, 150,
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SessionsChart = () => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: "0px 16px" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ padding: 0, fontWeight: 600 }}
        >
          Sessions
        </Typography>
      </CardContent>
      <Container className="bg-white  ">
        <LineChart
          xAxis={[{ data: months, scaleType: "point" }]}
          yAxis={[
            {
              min: 0,
              max: 400,
              sx: {
                ".MuiChartsAxis-tickLabel": { fontSize: 5, fill: "black" },
              },
            },
          ]}
          grid={{ horizontal: true }}
          series={[
            {
              data: redLineData,
              label: "New customers",
              showMark: false,
              area: true,
              color: "red",
            },
            {
              data: greenLineData,
              label: "Unique Customers",
              showMark: false,
              area: true,
              color: "green",
            },
            {
              data: purpleLineData,
              label: "Loyal customers",
              showMark: false,
              area: true,
              color: "purple",
            },
          ]}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
              padding: 0,
              labelStyle: {
                fontSize: 8,
                fill: "blue",
              },
            },
          }}
          height={264}
          sx={{
            [`& .${areaElementClasses.root}`]: {
              fill: "url(#swich-color-id-2)",
            },
          }}
        ></LineChart>
      </Container>
    </Card>
  );
};

export default SessionsChart;
