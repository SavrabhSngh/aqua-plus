import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { hideSnackbar } from "../../Store/Snackbar/action";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Snackbars(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.hideSnackbar();
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.snackbarData.open}
        autoHideDuration={props.snackbarData.autoHideDuration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.snackbarData.severity}
          sx={{ width: "100%" }}
        >
          {props.snackbarData.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

const mapStateToProps = (state) => {
  return {
    snackbarData: state.SnackbarData,
  };
};

export default connect(mapStateToProps, {
  hideSnackbar,
})(Snackbars);

Snackbars.propTypes = {
  hideSnackbar: PropTypes.func.isRequired,
};
