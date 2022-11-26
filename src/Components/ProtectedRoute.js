import _ from "lodash";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const name = localStorage.getItem("user");
  return name && !_.isEqual(name, "") ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
