import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import GetIcons from "../../Common/GetIcons";
import DashTable from "./DashTable";
import "./Dashboard.css";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const Dashboard = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const result = props.customerData.filter(
      (customer) => customer.customerId < 20
    );
    setData(result);
  }, [props.customerData]);

  const handleChange = (e, p) => {
    const result = props.customerData.filter(
      (customer) =>
        customer.customerId > 20 * p - 20 && customer.customerId < 20 * p
    );
    setData(result);
  };

  return (
    <div className="dashboard">
      <Card sx={{ minWidth: 275 }}>
        <div className="card-header sflex">
          <div className="dflex">
            {GetIcons("ManageAccounts")} <h2>Customers</h2>
          </div>
          <div className="dash-buttons">
            <Button
              color="secondary"
              variant="outlined"
              size="medium"
              sx={{ mr: 2 }}
            >
              <i className="fas fa-user-plus"></i>&nbsp; ADD
            </Button>
            <Button variant="contained" color="primary" size="medium">
              <i className="fas fa-file-export"></i>&nbsp; Export
            </Button>
          </div>
        </div>
        <Divider />
        <CardContent sx={{ padding: "2% 2% 0px 2%" }}>
          <DashTable customerData={data} />
          <Box
            sx={{
              pt: 3,
              pr: 3,
              pl: 3,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={Math.ceil(props.customerData.length / 20)}
              color="primary"
              onChange={handleChange}
            />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    customerData: state.CustomerDetails,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
