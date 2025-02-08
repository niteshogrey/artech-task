import { Box, Grid2 } from "@mui/material"
import Header from "../components/Header"
import SessionsChart from "../components/chart/SessionsChart"
import Sidebar from "../components/Sidebar"
import RevenueBar from "../components/chart/RevenueBar"
import SalesSummery from "../components/SalesSummer"
import ProductDashboard from "../components/chart/ProductsChart"
import CustomerSatisfactionChart from "../components/chart/CustomerBar"
import TargetRealityChart from "../components/chart/TargetRealityChart"
import VolumeServiceChart from "../components/chart/VolumeServiceChart"
import MapChart from "../components/chart/MapChart"


const Dashboard = () => {
  return (
    <div className="bg-gray-100"  >
    <Header/>
    <Box sx={{display: 'flex'}} >
      <Sidebar/>
    <Box sx={{ flexGrow: 1 }}>
    <Box height={132} />
      <Grid2 container  spacing={1}>
        <Grid2 size={{ xs: 6, md: 7.5 }}>
          <SalesSummery/>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4.4 }}>
          <SessionsChart/>
        </Grid2>
      </Grid2>
      <Box height={10} />
      <Grid2 container marginLeft={1} spacing={1}>
        <Grid2 size={{  md: 5.5 }}>
          <RevenueBar/>
        </Grid2>
        <Grid2 size={{  md: 3.2 }}>
          <CustomerSatisfactionChart/>
        </Grid2>
        <Grid2 size={{  md: 3.2 }}>
          <TargetRealityChart/>
        </Grid2>
      </Grid2>
      <Box height={10} />
      <Grid2 container marginLeft={1} spacing={1}>
        <Grid2 size={{ xs: 6, md: 5.5 }}>
          <ProductDashboard/>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3.2 }}>
          <MapChart/>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3.2 }}>
          <VolumeServiceChart/>
        </Grid2>
      </Grid2>
    </Box>
    </Box>
    </div>
  )
}

export default Dashboard