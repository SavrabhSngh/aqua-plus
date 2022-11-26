import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GetIcons from "../../Common/GetIcons";
import { DrawerInfo } from "../../../Services/Constants";
import { DataService } from "../../../Services/DataService";
import { useNavigate } from "react-router-dom";
import "./Drawer.css";

const Drawer = () => {
  const navigate = useNavigate();
  const handleClick = (param) => {
    switch (param) {
      case "Dashboard":
        DataService.ServiceInst?.next({
          msgType: "Dashboard",
          payLoad: "",
        });
        break;
      case "Account":
        DataService.ServiceInst?.next({
          msgType: "Account",
          payLoad: "",
        });
        break;
      case "Documents":
        DataService.ServiceInst?.next({
          msgType: "Documents",
          payLoad: "",
        });
        break;
      case "Settings":
        DataService.ServiceInst?.next({
          msgType: "Settings",
          payLoad: "",
        });
        break;
      case "Contact":
        DataService.ServiceInst?.next({
          msgType: "Contact",
          payLoad: "",
        });
        break;
      case "Logout":
        DataService.logout();
        navigate("/aqua-plus");
        break;
      default:
    }
  };

  return (
    <div className="left-drawer">
      <div className="drawer-header dflex">
        <h2>Aqua Plus</h2>
      </div>
      <List>
        {Object.keys(DrawerInfo).map((obj, index) => {
          return (
            <ListItem
              disablePadding
              key={index}
              onClick={() => handleClick(obj)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {GetIcons(DrawerInfo[obj])}
                </ListItemIcon>
                <ListItemText primary={obj} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Drawer;
