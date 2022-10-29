import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NoMatch from "./Components/NoMatch/NoMatch";
import Session from "./Components/Session";
import Signin from "./Components/Signin/Signin";

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
        <Route exact path="/" element={<Signin />}></Route>
        <Route exact path="/session" element={<Session />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
