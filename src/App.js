import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Components/Signin/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import Session from "./Components/Session";
import NoMatch from "./Components/NoMatch/NoMatch";

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/aqua-plus" element={<Signin />}></Route>
        <Route path="/aqua-plus/session" element={<ProtectedRoute />}>
          <Route path="" element={<Session />} />
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
