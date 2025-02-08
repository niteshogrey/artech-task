import { Box, Button, Card, Typography } from "@mui/material";
import SalesCard from "./SalesCard";
import IosShareIcon from '@mui/icons-material/IosShare';

const SalesSummery = () => {
  return (
    <Card variant="outlined" className=" bg-white p-5 ml-2">
      <Box component="main" className="flex justify-between">
        <Box component='div' >

        <Typography variant="h5" > Today&apos;s Sales</Typography>
        <Typography variant="body1">Sales Summery</Typography>
        </Box>
        <Button variant="outlined" className="w-32 gap-2 h-10">
            <IosShareIcon/>
            Export
        </Button>
      </Box>
        <SalesCard />
    </Card>
  );
};

export default SalesSummery;
