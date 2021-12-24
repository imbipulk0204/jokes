import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../contextApi/state";
const Navbar = () => {
  const [{ user }, dispatch] = useStateValue();
  const dataa = JSON.parse(localStorage.getItem("login"));
  const handlClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "USER",
      user: "",
    });
    localStorage.setItem("login", JSON.stringify(""));
  };
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Task</h1>
      </Link>
      {dataa && (
        <div className="buttonWrapper">
          <Link to="/jokes">
            <button
              style={{
                border: "none",
                backgroundColor: "orange",
                color: "white",
                padding: 10,
                marginRight: 20,
              }}
            >
              Jokes
            </button>
          </Link>
          <button
            style={{
              border: "none",
              backgroundColor: "teal",
              color: "white",
              padding: 10,
            }}
            onClick={handlClick}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
