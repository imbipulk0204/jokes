import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/Home";
import Jokes from "./components/home/Jokes";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import { useStateValue } from "./contextApi/state";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const dataa = JSON.parse(localStorage.getItem("login"));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={!dataa ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/" element={dataa ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/jokes"
          element={dataa ? <Jokes /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
