import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useStateValue } from "../../contextApi/state";
const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passerror, setPassError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!email) setEmailError("email required");
    if (!password) setPassError("password required");

    if (email === "bipul@gmail.com" && password === "bipul") {
      localStorage.setItem("login", JSON.stringify(email));
      dispatch({
        type: "USER",
        user: email,
      });
    } else {
      setError("email and password are not matched");
    }
  };
  return (
    <Form className="form">
      <span style={{ color: "red" }}>{error && error}</span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter email"
          aria-required
          onChange={(e) => {
            setError("");
            setEmailError("");
            setEmail(e.target.value);
          }}
        />
        <span>{emailError && emailError}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          maxLength="8"
          aria-required
          onChange={(e) => {
            setError("");
            setPassError("");
            setPassword(e.target.value);
          }}
        />
        <span>{passerror && passerror}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          value="remember"
          label="Remember me"
          aria-required
        />
      </Form.Group>
      <Button variant="danger" onClick={handleClick}>
        login
      </Button>
    </Form>
  );
};

export default Login;
