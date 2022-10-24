import "./index.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Drawer from "./Drawer/Drawer";
import AppBar from "./AppBar/AppBar";
import HeaderAlert from "../Common/HeaderAlert";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import { DataService } from "../../Services/DataService";
import RenderComponents from "./RenderComponent";
import { showSnackbar } from "../../Store/Snackbar/action";
import Snackbars from "../Common/Snackbar";

const Session = (props) => {
  const [visbility, setVisibility] = useState("Dashboard");
  useEffect(() => {
    DataService.initializeSubscriber(
      (data) => {
        switch (data.msgType) {
          case "Dashboard":
            setVisibility("Dashboard");
            break;
          case "Account":
            setVisibility("Account");
            break;
          case "Documents":
            setVisibility("Document");
            break;
          case "Settings":
            setVisibility("Settings");
            break;
          case "Contact":
            setVisibility("Contact");
            break;
          default:
        }
      },
      (error) => {
        props.showSnackbar({
          open: true,
          autoHideDuration: 10000,
          severity: "error",
          message: error,
        });
      }
    );
  }, []);

  return (
    <div className="session">
      <div className="left-session">
        <Drawer />
      </div>
      <div className="right-session">
        <AppBar />
        <div className="container">
          <HeaderAlert severity={"success"} text={visbility} />
          <RenderComponents visbility={visbility} />
        </div>
        <Snackbars />
        <Footer />
      </div>
    </div>
  );
};

export default connect(null, {
  showSnackbar,
})(Session);

Session.propTypes = {
  showSnackbar: PropTypes.func.isRequired,
};
