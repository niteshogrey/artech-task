import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CardAlert from "./CardAlert";
import { DummyLogo } from "../components/customIcons";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { BsGraphUp } from "react-icons/bs";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
const drawerWidth = 240;

const Sidebar = () => {
    const menuItem = [
        {icons: <LeaderboardIcon/>, title: "Leaderboard" },
        {icons: <ShoppingCartOutlinedIcon/>, title: "Order" },
        {icons: <ShoppingBagOutlinedIcon/>, title: "Products" },
        {icons: <BsGraphUp/>, title: "Sales Report" },
        {icons: <LuMessageSquareMore/>, title: "Messages" },
        {icons: <IoSettingsOutline/>, title: "Settings" },
        {icons: <IoLogOutOutline/>, title: "Sign Out" }


    ]
  return (
    <Box sx={{ display: "flex", scrollBehavior:"auto" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },  }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              top: "60px",
              height: "calc(100vh - 60px)", // ✅ Makes the drawer full height
              overflow: "auto",
            },
          }}
        >
          <div>
            <Box
              component="div"
              className="flex items-center justify-center m-5 gap-5 text-2xl"
            >
                <DummyLogo />

              <Typography variant="h5" fontWeight="bold">
                Digital life
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: "180px",
                margin: "auto",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                textTransform: "none",
                background: "#5D5FEF",
              }}
            >
              Dashboard
            </Button>
            <List>
              {menuItem.map((text, index) => (
                <ListItem key={index} disablePadding="false" className="hover:bg-gray-200" >
                  <ListItemButton >
                    <ListItemIcon>
                      {text.icons}
                    </ListItemIcon>
                    <ListItemText primary={text.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box height={10} />
            <CardAlert />
          </div>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
