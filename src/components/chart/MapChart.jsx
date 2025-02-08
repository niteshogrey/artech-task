import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  MapsTooltip,
  Legend,
} from "@syncfusion/ej2-react-maps";

import { world_map } from "./WorldMap";
import { Card, CardContent } from "@mui/material";

const MapChart = () => {
  const dataSource = [
    { Country: "China", Membership: "Permanent" },
    { Country: "Saudi Arabia", Membership: "Permanent" },
    { Country: "Dem. Rep. Congo", Membership: "Permanent" },
    { Country: "Brazil", Membership: "Non-Permanent" },
    { Country: "United States", Membership: "Non-Permanent" },
    { Country: "Indonesia", Membership: "Non-Permanent" },
  ];

  return (
    <Card variant="outlined" sx={{ width: "333px"}}>
      <CardContent>
        <MapsComponent
          id="maps"
          width="100%"
          height="345px"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Inject services={[MapsTooltip, Legend]} />
          <LayersDirective>
            <LayerDirective
              shapeData={world_map}
              dataSource={dataSource}
              shapePropertyPath="name"
              shapeDataPath="Country"
              shapeSettings={{
                colorValuePath: "Country",
                colorMapping: [
                  { value: "China", color: "#8950FC" },
                  { value: "Saudi Arabia", color: "green" },
                  { value: "Dem. Rep. Congo", color: "#6993FF" },
                  { value: "Brazil", color: "red" },
                  { value: "United States", color: "orange" },
                  { value: "Indonesia", color: "red" },
                ],
              }}
            />
          </LayersDirective>
        </MapsComponent>
      </CardContent>
    </Card>
  );
};

export default MapChart;
