import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import {
  NewCustomerIcon,
  ProductSoldIcon,
  TotalOrderIcons,
  TotalSalesIcon,
} from "./customIcons";

const cardItems = [
  {
    icon: <TotalSalesIcon />,
    value: "$1k",
    title: "Total Sales",
    description: "+8% from yesterday",
    background: '#FFE2E5'
  },
  {
    icon: <TotalOrderIcons />,
    value: "300",
    title: "Total Order",
    description: "+5% from yesterday",
    background: '#FFF4DE'

  },
  {
    icon: <ProductSoldIcon />,
    value: "5",
    title: "Product sold Sales",
    description: "+1.2% from yesterday",
    background: '#DCFCE7'

  },
  {
    icon: <NewCustomerIcon />,
    value: "8",
    title: "New Customers",
    description: "0.5% from yesterday",
    background: '#F3E8FF'

  },
];

const SalesCard = () => {
  return (
    <Box className='flex' >
      {cardItems.map((item, index) => (
        <Grid2 key={index} >
        <Card variant="contained" sx={{ m: 1.5, flexShrink: 0, backgroundColor: item.background,  }}>
          <CardContent className="flex flex-col rounded-full" >
           {item.icon}
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }} >
              {item.value}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" size="small" color="primary" fullWidth>
              {item.description}
            </Typography>
          </CardContent>
        </Card>
        </Grid2>
      ))}
    </Box>
  );
};

export default SalesCard;
