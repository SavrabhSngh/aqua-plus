import Paper from "@mui/material/Paper";
import "./Footer.css";

const Footer = () => {
  return (
    <Paper elevation={0} sx={{ mt: 4 }}>
      <div className="footer">
        <div className="footer-left dflex">
          <i className="fas fa-copyright"></i> &nbsp;All Rights Reserved by
          &nbsp;
          <h4 style={{ color: "#ff014f" }}>Aqua+</h4>
        </div>
        <div className="footer-right dflex">
          <p className="footer-policy">Privacy Policy</p>
          <p className="footer-terms">Terms & Conditions</p>
        </div>
      </div>
    </Paper>
  );
};

export default Footer;
