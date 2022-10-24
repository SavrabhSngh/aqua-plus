import Alert from "@mui/material/Alert";
import GetIcons from "./GetIcons";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const HeaderAlert = (props) => {
  return (
    <Alert icon={false} severity={props.severity} color="success">
      <ListItemButton
        style={{ cursor: "auto", backgroundColor: "transparent" }}
      >
        <ListItemIcon>{GetIcons(props.text)}</ListItemIcon>
        <ListItemText primary={props.text} sx={{ fontWeight: "900" }} />
      </ListItemButton>
    </Alert>
  );
};

export default HeaderAlert;
