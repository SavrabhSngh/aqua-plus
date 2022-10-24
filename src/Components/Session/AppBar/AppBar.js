import { useState } from "react";
import PopOver from "../../Common/PopOver";
import GetIcons from "../../Common/GetIcons";
import "./AppBar.css";

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleAccountClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    handleClose();
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="drawer-header app-bar">
      <div className="appbar-left">
        <h3>Hii, Savrabh Singh</h3>
      </div>
      <div className="appbar-right" onClick={handleAccountClick("bottom-end")}>
        <h3>{GetIcons("Account")}</h3>
      </div>
      <PopOver
        anchorEl={anchorEl}
        open={open}
        placement={placement}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AppBar;
