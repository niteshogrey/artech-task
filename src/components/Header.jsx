import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputAdornment,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AmericaIcon } from "./customIcons";
import profilePic from "../assets/profile.jpg";
const Header = () => {
  const drawerWidth = 240;
  return (
    <AppBar
      variant="permanent"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        top: "60px",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
        className="flex items-center justify-between"
      >
        <Typography
          variant="h6"
          fontWeight={600}
          noWrap
          component="p"
          className="text-black font-extrabold"
        >
          Dashboard
        </Typography>
        <Box className="flex justify-between gap-5">
          <InputBase
            sx={{
              backgroundColor: "#F9FAFB",
              width: "60vh",
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#5D5FEF" }} />
              </InputAdornment>
            }
            placeholder="Search here..."
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Box
            component="div"
            className="flex items-center  justify-center gap-1"
          >
            <AmericaIcon />
            <Typography variant="body1" component="p" className="text-black">
              Eng
            </Typography>
            <Button>
              <KeyboardArrowDownIcon />
            </Button>
          </Box>
          <Box
            component="div"
            className="flex items-center justify-center gap-2"
          >
            <Badge
              color="secondary"
              variant="dot"
              className="text-black p-2 bg-amber-100 rounded-xl"
            >
              <NotificationsNoneOutlinedIcon
                sx={{
                  color: "orange",
                }}
              />
            </Badge>
            <Box
              component="div"
              className="flex items-center justify-center gap-2"
            >
              <Avatar alt="User Name" src={profilePic} className="w-12 h-12" />
              <Typography variant="h6" className="flex-grow text-gray-800">
                John Doe
              </Typography>

              <Button
                variant="text"
                className="bg-black hover:bg-gray-300 text-black px-4 py-2"
              >
                <KeyboardArrowDownIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
