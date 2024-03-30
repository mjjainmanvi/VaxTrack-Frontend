import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminDashboard from "./components/AdminDashboard";
import Appointments from "./components/Appointments";
import VaccineCenters from "./components/VaccineCenters";
import Patients from "./components/Patients";
import AddVaccinationCenter from "./components/AddVaccinationCenter";
import Vaccines from "./components/Vaccines";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notification from "./components/Notification";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Vaccines", path: "/admin/vaccines", icon: <InventoryIcon /> },
  { name: "Patients", path: "/admin/patients", icon: <PersonIcon /> },
  {
    name: "Appointments",
    path: "/admin/appointments",
    icon: <InventoryIcon />,
  },
  {
    name: "VaccineCenter",
    path: "/admin/vaccinecenter",
    icon: <AddShoppingCartIcon />,
  },
  {
    name: "AddVacineCenter",
    path: "/admin/vaccinecenter/create",
    icon: <AddIcon />,
  },
  {
    name: "Notification",
    path: "/admin/notification",
    icon: <NotificationsIcon />,
  },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-[100vh]">
        <CssBaseline />
        <div className="w-[15%] border border-r-gray-300  ">{drawer}</div>
        <div className="w-[85%] ">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route
              path="/vaccinecenter/create"
              element={<AddVaccinationCenter />}
            ></Route>
            <Route path="/appointments" element={<Appointments />}></Route>
            <Route path="/vaccinecenter" element={<VaccineCenters />}></Route>
            <Route path="/patients" element={<Patients />}></Route>
            <Route path="/vaccines" element={<Vaccines />}></Route>
            <Route path="/notification" element={<Notification />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
