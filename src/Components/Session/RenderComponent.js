import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Settings/Settings";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import Documents from "./Documents/Documents";

const RenderComponents = (props) => {
  switch (props.visbility) {
    case "Dashboard":
      return <Dashboard />;
    case "Account":
      return <Profile />;
    case "Document":
      return <Documents />;
    case "Settings":
      return <Settings />;
    case "Contact":
      return <Contact />;
    default:
      <></>;
  }
};

export default RenderComponents;
