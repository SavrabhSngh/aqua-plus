import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import GetIcons from "../Common/GetIcons";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { showSnackbar } from "../../Store/Snackbar/action";
import Snackbar from "../Common/Snackbar";
import "./Signin.css";

const Signin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (key, value) => {
    if (_.isEqual(key, "username")) {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    if (_.isEqual(username, "") || _.isEqual(password, "")) {
      props.showSnackbar({
        open: true,
        autoHideDuration: 10000,
        severity: "error",
        message: "Username and Password required",
      });
    }
  };

  return (
    <div className="login">
      <div id="round"></div>
      <div id="irregular"></div>
      <Snackbar />
      <div className="login-content">
        <div className="content-left">
          <div className="login-text">
            <h3>The best offer</h3>
            <h2>for your business</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="content-right">
          <div className="login-form">
            <h3>Welcome Back !</h3>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Username
              </InputLabel>
              <OutlinedInput
                onChange={(event) =>
                  handleChange("username", event.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">
                    {GetIcons("Account")}
                  </InputAdornment>
                }
                label="Username"
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Password
              </InputLabel>
              <OutlinedInput
                type="password"
                onChange={(event) =>
                  handleChange("password", event.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">
                    {GetIcons("Password")}
                  </InputAdornment>
                }
                label="Password"
                required
              />
            </FormControl>
            <div className="form-controls">
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="Remember"
              />
              <h4>Forgot Password ?</h4>
            </div>
            <Button
              variant="contained"
              size="medium"
              fullWidth
              sx={{ mt: 2, mb: 1 }}
              onClick={handleSubmit}
            >
              LOG IN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, {
  showSnackbar,
})(Signin);

Signin.propTypes = {
  showSnackbar: PropTypes.func.isRequired,
};
