import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GetIcons from "./GetIcons";
import { PopoverData } from "../../Services/Constants";
import { DataService } from "../../Services/DataService";
import { useNavigate } from "react-router-dom";

const PopOver = (props) => {
  const navigate = useNavigate();
  const hadleClick = (param) => {
    switch (param) {
      case "Account":
        DataService.ServiceInst?.next({
          msgType: "Account",
          payLoad: "",
        });
        props.handleClose();
        break;
      case "Contact":
        DataService.ServiceInst?.next({
          msgType: "Contact",
          payLoad: "",
        });
        props.handleClose();
        break;
      case "Logout":
        navigate("/aqua-plus");
        props.handleClose();
        break;
      default:
    }
  };

  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorEl}
      placement={props.placement}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper sx={{ p: 1 }}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                pl: 1,
                pr: 1,
              }}
              component="nav"
            >
              {Object.keys(PopoverData).map((obj, index) => {
                return (
                  <ListItem button key={index} onClick={() => hadleClick(obj)}>
                    {GetIcons(PopoverData[obj])}
                    <Typography sx={{ pl: 2 }}> {obj} </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default PopOver;
