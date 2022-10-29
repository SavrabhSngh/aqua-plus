import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import Settings from "@mui/icons-material/Settings";
import ContactPage from "@mui/icons-material/ContactPage";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import School from "@mui/icons-material/School";
import Https from "@mui/icons-material/Https";

const GetIcons = (param) => {
  switch (param) {
    case "Dashboard":
      return <Dashboard />;
    case "Account":
      return <AccountCircle />;
    case "ManageAccounts":
      return <ManageAccounts />;
    case "Document":
      return <PictureAsPdf />;
    case "Settings":
      return <Settings />;
    case "Contact":
      return <ContactPage />;
    case "Logout":
      return <Logout />;
    case "Login":
      return <Login />;
    case "School":
      return <School />;
    case "Password":
      return <Https />;
    default:
      return "";
  }
};

export default GetIcons;
